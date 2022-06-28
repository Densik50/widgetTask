# Widget
Create a simple web application which renders data defined by the API endpoint below.
You can use server or client side rendering - up to you.

### API endpoint:
https://search-api.fie.future.net.uk/widget.php?id=review&model_name=nintendo_switch&ar
ea=GB

The application must get fresh data from the given endpoint and render them in a “table”
layout (it does not have to be a <table> HTML element - it is up to you how you render the
data and how you style it but it should look like a table).
The final structure should include 4 rows representing 4 products retriever from API field
[widget.data.offers].
Each row should contain at least:
- Product name (offer.name)
- Price (offer.price) including currency (offer.currency_iso nebo offer.currency_symbol)
- Link to the merchant (offer.link)
- Image - if available (image)
- Merchant name and logo (merchant.name nebo merchant.logo_url)
You can include other data as well (optional).
The target is to render the offers in a user friendly way.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```