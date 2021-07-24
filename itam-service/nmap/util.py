#!/usr/bin/python
# -*- coding: utf-8 -*-

import sys
import nmap
import pprint
from ..__init__ import db, app
from .models import PORT_USED, TCP, UDP, DETAILS
import schedule
import time

nmap_path = r"C:\Program Files (x86)\Nmap\nmap.exe"
sys.path.append(nmap_path)

nm = nmap.PortScanner()

all_hosts=""
pip_addr=""


nmap_profiles = {
    'initial_scan': '-n -sP',
    'Intense scan': [{'-T4' 'ip': ''}, '-T{0} -A -v {1}'],
    "Intense scan plus UDP":[{"-T":[4,0,1,2,3,5],"ip":""},"-sS -sU -T{0} -A -v {1}"],
    "Intense scan, all TCP ports":[{"-T":[4,0,1,2,3,5],"ip":""},"-p 1-65535 -T{0} -A -v {1}"],
    "Intense scan, no ping":[{"-T":[4,0,1,2,3,5],"ip":""},"-T{0} -A -v -Pn {1}"],
    "Ping scan":[{"-T":[4,0,1,2,3,5],"ip":""},"-sn {1}"],
    "Quick scan":[{"-T":[4,0,1,2,3,5],"ip":""},"-T{0} -F {1}"],
    "Quick scan plus":[{"-T":[4,0,1,2,3,5],"ip":""},"-sV -T{0} -O -F -version-light {1}"],
    "Quick traceroute":[{"ip":""},"-sn -traceroute {0}"],
    "Regular scan":[{"ip":""},"{0}"],
    'Quick traceroute': [{'ip': ''}, '-sn -traceroute {0}'],
    'Regular scan': [{'ip': ''}, '{0}'],
    'slow_comprehensive_scan': '-sS -O -sU -T4 -A -v -PE -PP -PS80,443 -PA3389 -PU40125 -PY -g 53',
    }


def performScan(hosts='', ip_addr='',
                scan_type='slow_comprehensive_scan'):
    scan_results = {} 
    print ('Performing Intense Scan')
    if hosts != '':
        all_hosts=hosts
        scan_results = nm.scan(hosts=hosts,
                               arguments=nmap_profiles[scan_type])
    else:
        pip_addr=ip_addr
        scan_results = nm.scan(ip_addr,
                               arguments=nmap_profiles[scan_type])
    return scan_results

def persistDetails(is_initial_scan, root, ip_addr):
    detail_session = \
            db.create_scoped_session(options=dict(bind=db.get_engine(app,
                'DETAILS'), binds={}))
    if (is_initial_scan or not DETAILS.query.filter_by(host=ip_addr).first()):
        new_detail = DETAILS(
            host=ip_addr,
            name=root[ip_addr]['hostnames'][0]['name'],
            type=root[ip_addr]['hostnames'][0]['type'],
            reason=root[ip_addr]['status']['reason'],
            state=root[ip_addr]['status']['state'],
            os_accuracy=root[ip_addr]['osmatch'][0]['accuracy'] or "",
            os_line=root[ip_addr]['osmatch'][0]['line'] or "",
            os_name=root[ip_addr]['osmatch'][0]['name'],
            os_family=root[ip_addr]['osmatch'][0]['osclass'][0]['osfamily'],
            os_gen=root[ip_addr]['osmatch'][0]['osclass'][0]['osgen'],
            os_type=root[ip_addr]['osmatch'][0]['osclass'][0]['type'],
            vendor=root[ip_addr]['osmatch'][0]['osclass'][0]['vendor'],
            )
        detail_session.add(new_detail)
    else:
        detail_session.execute("UPDATE DETAILS\
                                SET name={}, type={}, reason={}, state={}, os_accuracy={}, os_line={}, os_name={}, os_family={}, os_gen={}, os_type={}, vendor={}\
                                    WHERE host={}".format(root[ip_addr]['hostnames'][0]['name'],
                                                        root[ip_addr]['hostnames'][0]['type'],
                                                        root[ip_addr]['status']['reason'],
                                                        root[ip_addr]['status']['state'],
                                                        root[ip_addr]['osmatch'][0]['accuracy'],
                                                        root[ip_addr]['osmatch'][0]['line'],
                                                        root[ip_addr]['osmatch'][0]['name'],
                                                        root[ip_addr]['osmatch'][0]['osclass'][0]['osfamily'],
                                                        root[ip_addr]['osmatch'][0]['osclass'][0]['osgen'],
                                                        root[ip_addr]['osmatch'][0]['osclass'][0]['type'],
                                                        root[ip_addr]['osmatch'][0]['osclass'][0]['vendor'],
                                                        ip_addr
                                                        ))
    detail_session.commit()

def persistTcp(is_initial_scan, root, ip_addr):
    if "tcp" in root[ip_addr]:
        tcp_session = \
            db.create_scoped_session(options=dict(bind=db.get_engine(app,
                'TCP'), binds={}))
        for port_num in root[ip_addr]['tcp']:
            if (is_initial_scan or not TCP.query.filter((TCP.host==ip_addr) & (TCP.port_number==port_num)).first()):
                new_tcp_port = TCP(
                    host=ip_addr,
                    port_number=port_num,
                    conf=root[ip_addr]['tcp'][port_num]['conf'],
                    cpe=root[ip_addr]['tcp'][port_num]['cpe'],
                    extrainfo=root[ip_addr]['tcp'][port_num]['extrainfo'
                            ],
                    name=root[ip_addr]['tcp'][port_num]['name'],
                    product=root[ip_addr]['tcp'][port_num]['product'],
                    reason=root[ip_addr]['tcp'][port_num]['reason'],
                    state=root[ip_addr]['tcp'][port_num]['state'],
                    version=root[ip_addr]['tcp'][port_num]['version'],
                    )
                tcp_session.add(new_tcp_port)
            else:
                tcp_session.execute("UPDATE TCP\
                                    SET conf={}, cpe={}, extrainfo={}, name={}, product={}, reason={}, state={}, version={}\
                                        WHERE (host={} AND port_number={})".format(
                                            root[ip_addr]['tcp'][port_num]['conf'],
                                            root[ip_addr]['tcp'][port_num]['cpe'],
                                            root[ip_addr]['tcp'][port_num]['extrainfo'],
                                            root[ip_addr]['tcp'][port_num]['name'],
                                            root[ip_addr]['tcp'][port_num]['product'],
                                            root[ip_addr]['tcp'][port_num]['reason'],
                                            root[ip_addr]['tcp'][port_num]['state'],
                                            root[ip_addr]['tcp'][port_num]['version'],
                                            ip_addr,
                                            port_num,
                                        ))
        tcp_session.commit()

def persistUdp(is_initial_scan, root, ip_addr):
    if 'udp' in root[ip_addr].keys():
        udp_session = \
            db.create_scoped_session(options=dict(bind=db.get_engine(app,
                'UDP'), binds={}))
        for port_num in root[ip_addr]['udp']:
            if (is_initial_scan or not UDP.query.filter((UDP.host==ip_addr) & (UDP.port_number==port_num)).first()):
                new_udp_port = UDP(
                    host=ip_addr,
                    port_number=port_num,
                    conf=root[ip_addr]['udp'][port_num]['conf'],
                    cpe=root[ip_addr]['udp'][port_num]['cpe'],
                    extrainfo=root[ip_addr]['udp'][port_num]['extrainfo'],
                    name=root[ip_addr]['udp'][port_num]['name'],
                    product=root[ip_addr]['udp'][port_num]['product'],
                    reason=root[ip_addr]['udp'][port_num]['reason'],
                    state=root[ip_addr]['udp'][port_num]['state'],
                    version=root[ip_addr]['udp'][port_num]['version'],
                    )
                udp_session.add(new_udp_port)
            else:
                udp_session.execute("UPDATE UDP\
                                    SET conf={}, cpe={}, extrainfo={}, name={}, product={}, reason={}, state={}, version={}\
                                        WHERE (host={} AND port_number={})".format(
                                            root[ip_addr]['udp'][port_num]['conf'],
                                            root[ip_addr]['udp'][port_num]['cpe'],
                                            root[ip_addr]['udp'][port_num]['extrainfo'],
                                            root[ip_addr]['udp'][port_num]['name'],
                                            root[ip_addr]['udp'][port_num]['product'],
                                            root[ip_addr]['udp'][port_num]['reason'],
                                            root[ip_addr]['udp'][port_num]['state'],
                                            root[ip_addr]['udp'][port_num]['version'],
                                            ip_addr,
                                            port_num,
                                        ))
        udp_session.commit()

def persistToDb(is_initial_scan=False):
    root = performScan(ip_addr='127.0.0.1')['scan']
    print(root)
    for ip_addr in root.keys():
        persistDetails(is_initial_scan, root, ip_addr)
        persistTcp(is_initial_scan, root, ip_addr)
        persistUdp(is_initial_scan, root, ip_addr)


schedule.every().day.at("00:00").do(persistToDb)
<<<<<<< HEAD
=======


>>>>>>> f255b36fd1f7d7c07592471b518c8776791c8064
