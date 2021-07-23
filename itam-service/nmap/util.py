import sys
import nmap
import pprint

nmap_path = r"C:\Program Files (x86)\Nmap\nmap.exe"
sys.path.append(nmap_path)

scanner = nmap.PortScanner()

nmap_profiles = {
    "initial_scan": "-n -sP" 
}

def synAckScan(hosts="", ip_addr=""):
    arguments = "-sn -PS"
    print("Nmap Version: {}".format(scanner.nmap_version()))
    if (hosts != "") :
        scanner.scan(hosts=hosts, arguments=arguments)
    elif (ip_addr != ""):
        scanner.scan(ip_addr, '1-1024', arguments)
    print(scanner.csv())
    pprint.pprint(scanner.__dict__)

def ping_scan(hosts="", ip_addr=""):
    arguments = '-sn'
    
#def performInitailScan(hosts="", ip_addr="")

synAckScan(hosts='192.168.0.1/24')