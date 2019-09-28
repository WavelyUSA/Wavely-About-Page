# Wavely About Us Page

## Local Installation and Testing

To run the application on your local environment, follow the below steps:

1. Install a local text editor such as VSCode, Atom, etc.
2. Make sure that Node and npm are installed globally in your local environment.
3. Next, clone the application on your desktop by typing in terminal

```
git clone https://gregtang1234@github.com/gregtang1234/Wavely-About-Page
```

4. Path into the "about-us" directory, and install all packages required to run the application:

```
npm install
```

5. To start up the application in local host, enter the following into terminal:

```
npm start
```

6. To run the application as production quality code, enter the following into terminal:

```
npm run build
serve -s build
```

## Server Admin Testing And Access

To manually update build files as an admin, follow the steps below:

1. Open terminal, and cd into your ssh folder
2. Log in as user with ```[user]@157.245.172.45```
3. ```cd /home/[user]/Wavely-About-Page/```
4. ```git pull```
5. ```cd about-us/```
6. ```sudo npm run build```
7. ```cd /var/www/157.245.172.45/html```
8. Remove the current build folder with ```sudo rm -r build/```
9. Copy and paste the new build folder fomr the About Us page directory
```
sudo cp -a /home/[user]/Wavely-About-Page/about-us/build/ /var/www/157.245.172.45/html
```
10. Restart nginx
```
sudo systemctl restart nginx
```
