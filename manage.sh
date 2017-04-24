#!/bin/bash

function install {
    curl https://install.meteor.com/ | sh
    npm install node-logitio --save
    # sudo apt-get install npm;
    sudo apt-get install python-software-properties
    curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
    sudo apt-get install nodejs
    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
    echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
    sudo apt-get install -y mongodb-org

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
