#We often need to move files to and from the HPC. This doc will cover the movement of files around computers both remote and local.

#Since we are moving more toward open science and data sharing, you might find a data set or scripts posted online. 
#The first thing we will be doing is getting a file from the web. 
#This will be accomplished with the wget command in the command line. 
#Wget derives it’s name from world wide web and get, which makes sense considering what we are using it for. 

#First go to the Welcome Wagon Home page located here: http://usdrcg.github.io/WelcomeWagonHome.html

#Once you are there, locate the light gray bar located near the bottom of the page. 
#Just above that you should see the two files that we are going to use. 
#Right click the crime stats link and select “Copy Link Address” from the menu. 

#If you have not done so already, open a terminal and connect to the HPC and navigate to the folder/directory where you want this file to go.
#Use the pwd command to verify your location.

	[Joseph.Madison@login-0-0 ~]$ cd demo_files
	[Joseph.Madison@login-0-0 demo_files]$ pwd
	/home/Joseph.Madison/demo_files

#Once there type in the command line wget and paste (may have trouble pasting, right click and select paste in Moba, DO NOT USE CTRL + V) the address we copied from the web: usdrcg.github.io/crime-statistics-for-south-africa.zip
#After hitting enter you should see the file download.
#Verify it is there using ls.

  [Joseph.Madison@login-0-0 demo_files]$ wget  usdrcg.github.io/crime-statistics-for-south-africa.zip 
	--16:03:05--  http://usdrcg.github.io/crime-statistics-for-south-africa.zip
	Resolving usdrcg.github.io... 151.101.32.133
	Connecting to usdrcg.github.io|151.101.32.133|:80... connected.
	HTTP request sent, awaiting response... 200 OK
	Length: 16206119 (15M) [application/zip]
	Saving to: `crime-statistics-for-south-africa.zip'

	100%[=============================================================================================================>] 16,206,119  19.8M/s   in 		0.8s   

	16:03:09 (19.8 MB/s) - `crime-statistics-for-south-africa.zip' saved [16206119/16206119]

	[Joseph.Madison@login-0-0 demo_files]$ ls
	crime-statistics-for-south-africa.zip  README  water_molecule.txt

#Now that we have some files to play with we are going to move them around. 
#To make the next step easier, while in the directory where we just downloaded these files type the Print Working Directory Command like this:

   	[Joseph.Madison@login-0-0 demo_files]$ pwd
	  /home/Joseph.Madison/demo_files

#Copy the output path.
#As before the cp command is for copy. 
#Similarly we have scp for secure copy. 
#This is used for moving files between computers over the internet. 
#We will be using it to transfer these files between your personal computer to the HPC.
#To get files from your local computer, you will need to open a local terminal session on your computer (Do not connect to the hpc!, in this example kvasir7@sc2-139 is my local pc).

	[kvasir7@sc2-139 ~]$

#We will repeat the wget command steps for the election polls file on the Welcome Wagon page for your local PC in the terminal.
  	[kvasir7@sc2-139 ~]$ cd Desktop
	[kvasir7@sc2-139 Desktop]$ wget  usdrcg.github.io/2016-election-polls.tar.gz 
	--16:06:43--  http://usdrcg.github.io/2016-election-polls.tar.gz
	Resolving usdrcg.github.io... 151.101.32.133
	Connecting to usdrcg.github.io|151.101.32.133|:80... connected.
	HTTP request sent, awaiting response... 200 OK
	Length: 8893 (8.7K) [application/octet-stream]
	Saving to: `2016-election-polls.tar.gz'

	100%[=================================>] 8,893       --.-K/s   in 0.04s  

	16:06:43 (210 KB/s) - `2016-election-polls.tar.gz' saved [8893/8893]

	kvasir7@sc2-139 Desktop]$ ls
	2016-election-polls.tar.gz	       


#Once you have this file on your local PC, you can move it (any file you want) from your local PC to the HPC.
#The syntax of the scp command has four parts:
#	1. scp command 
#	2. The file you are moving
#	3. The path to the file you want to copy
#	4. The target local directory where this file will be downloaded to
#Type the scp command as follows (paste in path that was copied from HPC):
  [kvasir7@sc2-139 Desktop]$ ls
  2016-election-polls.tar.gz
  [kvasir7@sc2-139 Desktop]$ scp 2016-election-polls.tar.gz Joseph.Madison@hpc.usd.edu:/home/Joseph.Madison/demo_files
	Joseph.Madison@hpc.usd.edu's password: 
	2016-election-polls.tar.gz              100% 8893     8.7KB/s   00:00

#The last line tells you stats on the transfer.
#You can also use scp for other data transfer applications including HPC to local PC, between HPCs, and between PCs.
#In a seperate terminal where I am logged into the HPC, I can check that the file was transferred and put into demo_files.

	[Joseph.Madison@login-0-0 demo_files]$ ls
  	2016-election-polls.tar.gz  crime-statistics-for-south-africa.zip  README  water_molecule.txt
  
#Now as most things go we showed you the harder way first for transferring files. 
#If you like moving files using the drag-and-drop method, that is what we are going to do next. 
#Note: using scp on the command line can be faster for some files (including large files). 
#This next file moving method uses sftp, or SSH (or Secure) File Transfer Protocol. 
#For this we will open up CyberDuck or FileZilla

#In CyberDuck select the Open Connection button with the globe and plus sign.
#A new window will then pop up.

#In the top drop down menu select SFTP option. 
#Enter hpc.usd.edu for server. 
#Enter your username and password. 
#Don’t change the port number. 
#Click connect. 
#Then in new window Click Allow. 

#You should now see your files on the hpc. From here you can drag and drop files between either computer as you desire. Easy!

#Now another option that you will need to use if you are going to be transferring large volumes of data between locations is a piece of software called Globus. 
#This is required for moving files around 1 TB or larger. 
#If you look here at their home page, globus.org,  you will see they have transferred around 206 Petabytes of data to date. 
#Just for reference, the all of the information in the library of congress converted to text files is one fourth of a petabyte.
#Globus will not be covered here today, but if you are interested or have questions feel free to contact us.

#The last thing to mention in this doc is the decompression of files. As you might have noticed already, the files we got using wget are in the form of .zip and .tar.gz. (tar.gz is similar to .zip)

#Compressed files are a great way to send large files via email, and when you have a directory with directories in it that you want to share as one file. 
#We will be doing this on the hpc.


#For zip files simply move them to the directory where you wish to have the files, make sure you are in that directory, and use the command unzip.
#This will extract the files from the .zip
    	[Joseph.Madison@login-0-0 demo_files]$ ls
	2016-election-polls.tar.gz  crime-statistics-for-south-africa.zip  README  water_molecule.txt
	[Joseph.Madison@login-0-0 demo_files]$ unzip crime-statistics-for-south-africa.zip 
	Archive:  crime-statistics-for-south-africa.zip
  		inflating: Police_bounds.dbf       
  		inflating: Police_bounds.prj       
  		inflating: Police_bounds.shp       
  		inflating: Police_bounds.shx       
  		inflating: Police_points.dbf       
  		inflating: Police_points.prj       
  		inflating: Police_points.shp       
  		inflating: Police_points.shx       
  		inflating: ProvincePopulation.csv  
  		inflating: SouthAfricaCrimeStats_v2.csv  
	[Joseph.Madison@login-0-0 demo_files]$ ls
	2016-election-polls.tar.gz	       Police_bounds.prj  Police_points.dbf  Police_points.shx	     SouthAfricaCrimeStats_v2.csv
	crime-statistics-for-south-africa.zip  Police_bounds.shp  Police_points.prj  ProvincePopulation.csv  water_molecule.txt
	Police_bounds.dbf		       Police_bounds.shx  Police_points.shp  README

#For the other commonly encountered compressed file type, we have the tar file. 
#This can be extracted using the tar -xzvf command:
	[Joseph.Madison@login-0-0 demo_files]$ ls
	2016-election-polls.tar.gz  crime-statistics-for-south-africa.zip  README  water_molecule.txt
	[Joseph.Madison@login-0-0 demo_files]$ tar -xzvf 2016-election-polls.tar.gz 
	./2016-election-polls/
	./2016-election-polls/presidential_polls.csv
	[Joseph.Madison@login-0-0 demo_files]$ ls
	2016-election-polls  2016-election-polls.tar.gz  crime-statistics-for-south-africa.zip	README	water_molecule.txt

#Note that -xzvf has the following meaniiing: -x, extract; -z gunzip; -v, verbose; -f use a file
#You can copy this into explainshell for further information.


#This should cover the majority of your data transferring needs, but if you want to know more feel free to ask us. 
