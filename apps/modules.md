{% include ../wikinav.html %}


[Back to the USDRCG site](http://usdrcg.github.io/index.html)

## Manage various software and versions

USD's HPC has lots of available software and it isn't possible to keep all of them in every user's path all of the time. If you need access to a piece of software that is installed on the HPC, you can use the environment module utility to make the software available to you.

First, you can list the available modules by typing `module avail`

You can also check to see the modules that are already loaded: `module list`

To load a module, use the load command, followed by the name of the module: `module load <module_name>`

Finally, if you're having trouble finding the correct module, you can search the names of the available modules by typing: `module key <search_term>`
