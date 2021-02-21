### Keeping projects upto date

* Clone the project
* npm install
* npm update (For minor version updates) or in package.json directly place the updated version and do npm install
* npm audit fix
* npm audit fix --force

### In package.json

* If ^ is present before the version, when npm update is done, it only updates the minor version, i.e. after the first .
* If > is present before the version, when npm update is done, it updates the major version, i.e. the first number