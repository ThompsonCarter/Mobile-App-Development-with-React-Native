sudo apt-get update
sudo apt-get install -y autoconf automake build-essential python3 libtool
git clone https://github.com/facebook/watchman.git
cd watchman
git checkout v2024.09.01.00
./autogen.sh
./configure
make
sudo make install