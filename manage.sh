#!/bin/bash

function install {
    curl https://install.meteor.com/ | sh;
    # sudo apt-get install npm;
    sudo apt-get install python-software-properties
    curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
    sudo apt-get install nodejs
    

}

case $1 in
  'install' )
    install
  ;;
  * )
    exit 1
  ;;
esac

exit 0