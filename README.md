# Clubkonnect NodeJS Library

## Services available on this package
 - Airtime purchase
 - Mobile data purchase
 - Cable purchase
 - Electricity purchase

## Installation

```bash
npm install clubkonnect
```

## Usage
```nodejs
var Clubkonnect = require('clubkonnect').Clubkonnect;
var konnect = new Clubkonnect('USER_ID', 'API_KEY');
```

### Airtime purchase
```nodejs
var Clubkonnect = require('clubkonnect').Clubkonnect;
var konnect = new Clubkonnect('USER_ID', 'API_KEY');

//Make payment
konnect.Airtime.charge(
    {
        recipientPhoneNumber: '09054321256',
        amount: 100
    }

  ).then((response)=>{

    console.log(response)

  }).catch((err)=>{

    console.error(err)

  })

//Confirm payment
konnect.Airtime.query(orderID)

    .then((response)=>{

        console.log(response)

    }).catch((error)=>{

        console.log(error)
    })
```

### Mobile Data Purchase
```nodejs
var Clubkonnect = require('clubkonnect').Clubkonnect;
var konnect = new Clubkonnect('USER_ID', 'API_KEY');

//Make payment
konnect.Mobiledata.charge(
    {
        recipientPhoneNumber: '09054321256',
        bundle: '500MB',
        provider: '9mobile'
    }

  ).then((response)=>{

    console.log(response)

  }).catch((err)=>{

    console.error(err)

  })

//Confirm payment
konnect.Mobiledata.query(orderID)

    .then((response)=>{

        console.log(response)

    }).catch((error)=>{

        console.log(error)
    })


```

#### Data Bundles
##### MTN
 - "1GBS" for 1GB SME Bundle
 - "1GB"
 - "2GBS" for 2GB SME Bundle
 - "2.5GB" 
 - "5GBS" SME 5GB Bundle

##### 9mobile
 - "500MB"
 - "1GB" 
 - "1.5GB" 
 - "2.5GB" 
 - "4GB" 
 - "5.5GB" 
 - "11.5GB"
 - "15GB"
 - "27GB"

##### Glo
 - "1.8GB"
 - "4.5GB"
 - "7.2GB"
 - "8.75GB"
 - "12.5GB" 

##### Airtel
 - "1.5GB"
 - "3.5GB"
 - "7GB"

### Cable Purchase
```nodejs
var Clubkonnect = require('clubkonnect').Clubkonnect;
var konnect = new Clubkonnect('USER_ID', 'API_KEY');


//Make payment
konnect.Cable.charge(
    {
        smart_card_no: '202248506758',
        provider: 'GOtv',
        package: 'Lite'
    }

  ).then((response)=>{

    console.log(response)

  }).catch((err)=>{

    console.error(err)

  })

//Verify SmartCard number
konnect.Cable.verifyCard("2022485085")

    .then((response)=>{

        console.log(response)

    }).catch((error)=>{

        console.log(error)
    })

//Confirm payment
konnect.Cable.query(orderID)

    .then((response)=>{

        console.log(response)

    }).catch((error)=>{

        console.log(error)
    })
```
#### Packages for Cable
##### DStv
 - "Access"
 - "Family"
 - "Compact"
 - "Compact Plus" 
 - "Premium"
 - "Premium + HD/Extra View"

##### GOtv
 - "Lite"
 - "Value" 
 - "Plus" 
 - "Max"

##### Startimes
 - "Nova"
 - "Basic"
 - "Smart"
 - "Classic"
 - "Unique"
 - "Super" 


### Electricity Purchase
```nodejs
var Clubkonnect = require('clubkonnect').Clubkonnect;
var konnect = new Clubkonnect('USER_ID', 'API_KEY');


//Make payment
konnect.Electricity.charge(
    {
        meter_no: '7077537537839',
        type: 'prepaid',
        company: 'EKEDC',
        amount: 1000
    }

  ).then((response)=>{

    console.log(response)

  }).catch((err)=>{

    console.error(err)

  })

//Verify Meter number
konnect.Electricity.verifyMeter("7077537537839")

    .then((response)=>{

        console.log(response)

    }).catch((error)=>{

        console.log(error)
    })

//Confirm payment
konnect.Electricity.query(orderID)

    .then((response)=>{

        console.log(response)

    }).catch((error)=>{

        console.log(error)
    })
```
#### Companies
 - "EKEDC" for Eko Electricity
 - "IKEDC" for Ikeja Electricity
 - "AEDC" for Abuja Electricity
 - "KEDC" for Kano Electricity
 - "PHEDC" for PortHarcourt Electricity
 - "JEDC" for Jos Electricity
 - "IBEDC" for Ibadan Electricity
 - "EEDC" for Enugu Electricity

