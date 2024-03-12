# ebay-client
 An Ebay client for searching articles by keywords
 
 ## Features
 * SEARCH: Query Ebay Api "Find Items Advanced" by keywords and get &le;100 items from response (currently available only for EBAY-US market place)
 * SEARCH FOR AVERAGE: Query Ebay Api "Find Items Advanced" by keywords and on all currently available Ebay market places, shows price related information from the results
 * SOLD ITEMS DURING THE LAST 7 DAYS OF AVAILABLE DATA (third party): retrieves data on the previous 7 days of sales for a given set of keywords, it's free and no login needed.

## Requirements
* Get access and Clone [ebay-Python repository](https://github.com/CristianRomero1234/ebay-Python.git) and run it from a command prompt as:
* `flask --app <path/to/server.py> run`
* Replace <path/to/server.py> with accurate path to file "server.py"
* Open ebay-client/index.html on your browser or visit from the same PC that is running flask app ("server.py")


