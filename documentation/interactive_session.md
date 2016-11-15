#Interactive session
#What does that mean? The user can submit a job to run on a compute node of the HPC, instead of submitting to the cluster (which we’ll cover in the next section). 
#Ideal for longer-duration jobs that may require interaction somewhere in the middle. 
#It’s somewhat like when you go to the library and check out a book for a few hours. 
#During that time, no one else is using that book. 
#You can’t keep the book forever, so I’ll also teach you how to end your session so that that node is available to other users again.
#This is quite easy to start:	

	[Joseph.Madison@login-0-0 ~]$ qlogin
	Your job 448655 ("QLOGIN") has been submitted
	waiting for interactive job to be scheduled ...
	Your interactive job 448655 has been successfully scheduled.
	Establishing /opt/gridengine/bin/rocks-qlogin.sh session to host compute-0-5.local ...
	Warning: Permanently added 'compute-0-5.local' (RSA) to the list of known hosts.
	Rocks Compute Node
	Rocks 5.0 (V)
	Profile built 11:57 17-Aug-2016
	
	Kickstarted 12:13 17-Aug-2016

#The information given is a job number and an assigned compute node. 
#You should see now that your prompt has changed and that you are now logged directly into a node.
#Even though we are logged into a node, we still have access to our directory contents.

	[Joseph.Madison@compute-0-5 ~]$ pwd
	/home/Joseph.Madison
	[Joseph.Madison@compute-0-5 ~]$ ls
	demo_files  dissertation_research  exp1  install_files
	[Joseph.Madison@compute-0-5 ~]$ 

#Let’s make another directory for this section.

	[Joseph.Madison@compute-0-5 ~]$ mkdir scripts
	[Joseph.Madison@compute-0-5 ~]$ cd scripts
	[Joseph.Madison@compute-0-5 scripts]$ 

#Just for fun we are going to use Python while we are playing around in our session. 
#Python is a programming language that is popular with scientists who need to crunch data and is recommended to people who are beginners (Not meant to teach you how to program in python, just that you can access your folders and use software in an interactive session).

	[Joseph.Madison@compute-0-5 scripts]$ python
	Python 2.4.3 (#1, Mar 14 2007, 19:01:42) 
	[GCC 4.1.1 20070105 (Red Hat 4.1.1-52)] on linux2
	Type "help", "copyright", "credits" or "license" for more information.
	>>> 

#There is some information that pops up on the screen, namely, the python version. 
#Just like software, it is common for languages to go through versions. 
#This is an older version, but there is a way to switch to a newer version.
#We need to exit this python command prompt. We accomplish this by typing:

	>>>[ctrl]+d    

#If you aren’t sure which version of Python will open when you type the python command, you can check using the “which python” command.
#We will see we are using the older version of python (newer version has a different name).

	[Joseph.Madison@compute-0-5 scripts]$ which python
	/usr/bin/python

#To access a newer version we can tell the HPC where to find it, and to use that version.
#We will access the newer version in the /share/apps folder on the HPC (this folder contains all common programs and environments that are common to all users.

	[Joseph.Madison@compute-0-5 scripts]$ 
	[Joseph.Madison@compute-0-5 scripts]$ cd ..
	[Joseph.Madison@compute-0-5 ~]$ source /share/apps/python27/env.sh
	[Joseph.Madison@compute-0-5 ~]$ which python
	/share/apps/python27/bin/python

#Now we are in the newer version of python.
#Now that we have set up the appropriate version of Python, we are going to finally open Python.

	[Joseph.Madison@compute-0-5 ~]$ python
	Python 2.7.9 (default, Mar 16 2015, 10:11:38) 
	[GCC 4.4.7 20120313 (Red Hat 4.4.7-1)] on linux2
	Type "help", "copyright", "credits" or "license" for more information.
	>>> 

#We can use this to type commands just like we were doing in the shell, but instead you use the python language. 
#So in the shell, if we wanted to write hello world on the screen, we would have used an echo command. 
	
	>>> "Hello world!"
	'Hello world!'

#You can also perform basic math functions:

	>>> 2+2
	4

#You can do lots of things from this python command prompt, but I want to show you how to make your own python program. 
#Let’s write a program that counts to 100. 
#First let’s exit python so we can use the shell text editor.
	
	[Joseph.Madison@compute-0-5 ~]$[ctrl]+d 
	[Joseph.Madison@compute-0-5 ~]$ nano counting.py
	for n in range(0,100):
    		print n
	[ctrl]O, [enter], [ctrl]X
#Now we can use python to run our code.

	[Joseph.Madison@compute-0-5 ~]$ python counting.py

#You will get an output of 0 to 99.
#What might be more useful is if that output ended up in a file. We can do that.

	[Joseph.Madison@compute-0-5 ~]$ python counting.py>numberList.txt

#We can use ls to check and see if the file was generated.	
	
	[Joseph.Madison@compute-0-5 ~]$ ls
	counting.py  dissertation_research  install_files   scripts
	demo_files   exp1		    numberList.txt

#You should see the file numberList.txt, and we can check the contents using the more command.
	
	[Joseph.Madison@compute-0-5 ~]$ more numberList.txt

#A subset of the file will be displayed.
#Hooray! You wrote a program in python.
#Recall that we’ve done all of this from our interactive session. 
#Now we are done, we need to close the connection.

	[Joseph.Madison@compute-0-5 ~]$ exit
	logout

	Connection to compute-0-5.local closed.
	/opt/gridengine/bin/rocks-qlogin.sh exited with exit code 0

#This may seem trivial, but recall that your node is unavailable for use by others. 
#What if you forget to logout? Does the world end? No, but you should clean up your inteteractive session.
#So, you forgot to close your session with the exit command, and you realized the next day that you may have left your qlogin open. 
#First we can check that by checking the status of the queue.

	[Joseph.Madison@compute-0-3 ~]$ qstat
	job-ID  prior   name       user         state submit/start at     				queue                          slots ja-task-ID 
	-----------------------------------------------------------------------------------------------------------------
 	448656 0.50219 QLOGIN     Joseph.Madis r     11/12/2016 18:00:45 				4core8GB.q@compute-0-3.local       1  

#You can then use the qdel command for ending an interactive login and your job number.

	[Joseph.Madison@compute-0-3 ~]$ qdel 448656

#Now we have ended our qlogin session. Please remember to exit your qlogin session when you are done so that those resources are available for others.

	
