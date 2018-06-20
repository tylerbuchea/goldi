# Goldi

## Setup

```bash
./ops setup
```

## Develop

```bash
# start developing 🎉
./ops start

# stop developing 🍺
./ops stop
```

## Test

```bash
./ops test
```

## Deploy

```bash
./ops ship
```

## Todo

* You are asked to develop a mini/example site that handle these actions:
* Given an API response you should show a company list. 
* Given an API response you should show company detail. 
* Given an API response you should show a discover feed which may link to company detail. 
* A company item from the list should be linked to detail. 
* Given a discover object, if it's a company video, it should be linked to company detail view. 
* Add a nav bar that handles those 2 actions (list and discover). 
* You will be given the API docs to achieve the request, also these entry point doesn't required authentication. 
* There is no need to handle CORS but check that your example works in browser. 
* It's a good practice to cover your work with unit tests. 
* Try to write clean and self-explanatory code, (e.g. var X = 1; is not very descriptive. 
* Also any package or library that makes your life easier and the work cleaner is always welcome.
* The API documentation entry points required for this task are these 3: 
  * https://dev-api.gldi.co/api/v1/docs/#!/company/company_list 
  * https://dev-api.gldi.co/api/v1/docs/#!/company/company_read 
  * https://dev-api.gldi.co/api/v1/docs/#!/discover/discover_list
* You can make use of our stage environment in: https://stage-api.gldi.co/api/v1
* There is no need for visual tweaks but information should be ordered and readable enough also you may use any HTML/CSS framework to make it look good.
* If you have any questions please email tc@goldi.com, I will try to reply as soon. as possible.
* Good luck Happy coding :-)
* Just to let you know, re: CORS that our production env expects everything to come from the same domain, so that's how it's setup currently. So you'll have to setup a proxy either with express or nginx. Let me know when you think you might be able to have something back for us.