# PHP

In order to perform the kata, first of all you will need to install all of the dependencies. This can be done using
composer (standing from the *"php"* directory")
```shell
wget http://getcomposer.org/composer.phar

**OR**

php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === 'e21205b207c3ff031906575712edab6f13eb0b361f2085f1f1237b7126d785e826a450292b6cfd1d64d92e6563bbde02') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"

**THEN**

php composer.phar install
```

Next, to execute the unit tests you need run this from the *php* directory
```shell
php bin/phpunit
```
