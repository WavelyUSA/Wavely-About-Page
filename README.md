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

Accessing from Greg's Computer

1. 1. Open terminal, and cd into your ssh folder
2. Log in as user with ```ssh greg@167.172.201.122```
3. Password: Shikamaru#2
4. Follow steps 3 and after listed below. If it asks you to enter Github password, password is Wavely#123

To manually update build files as an admin, follow the steps below:

1. Open terminal, and cd into your ssh folder
2. Log in as user with ```ssh [user]@167.172.201.122```
3. ```cd /home/[user]/Wavely-About-Page/```
4. ```git pull```
5. ```cd about-us/```
6. ```sudo npm run build```
7. ```cd /var/www/167.172.201.122/html```
8. Remove the current build folder with ```sudo rm -r build/```
9. Copy and paste the new build folder from the About Us page directory
```
sudo cp -a /home/[user]/Wavely-About-Page/about-us/build/ /var/www/167.172.201.122/html
```
10. Restart nginx
```
sudo systemctl restart nginx
```
