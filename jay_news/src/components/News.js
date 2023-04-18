import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "CoinDesk",
      },
      author: "Sam Reynolds, Michael J. Casey",
      title:
        "First Mover Asia: Is a ‘Sharp Move’ Around the Corner for Bitcoin and Ether? - CoinDesk",
      description:
        "ALSO: In his latest Money Reimagined column, CoinDesk Chief Content Officer Michael Casey ties the recent political and regulatory backlash toward the crypto industry to the alleged misdeeds of disgraced FTX CEO Sam Bankman-Fried. Will the current climate dri…",
      url: "https://www.coindesk.com/markets/2023/04/10/first-mover-asia-is-a-sharp-move-around-the-corner-for-bitcoin-and-ether/",
      urlToImage:
        "https://www.coindesk.com/resizer/2r9V1eP0kobPxO0fCOJrZHb_uYY=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/AYMWQNK3RZFMXP2QRLDDPEN6PA.jpg",
      publishedAt: "2023-04-10T00:50:00Z",
      content:
        "Good morning. Heres whats happening:\r\nPrices: Ethereum's Shanghai upgrade is a few days away, but this isn't translating into selling pressure because most staked Ether is at a loss.\r\nInsights: In hi… [+5316 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Jim Cramer",
      title: "Cramer asks: Is the Fed attuned to data or dogma? - CNBC",
      description:
        "We've been waiting for the other shoe to drop, and it's truly beginning to do so.",
      url: "https://www.cnbc.com/2023/04/09/cramer-asks-is-the-fed-attuned-to-data-or-dogma-.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107219753-1680564743082-gettyimages-1247860369-1265439-na-pol-0307-capitol-hill-kkn-38569.jpeg?v=1681085220&w=1920&h=1080",
      publishedAt: "2023-04-10T00:07:00Z",
      content:
        "Sometimes you hope others pivot when you have new information that should change policymakers' minds. We got our non-farm payroll numbers and they were predictably strong, but because of how poorly t… [+4305 chars]",
    },
    {
      source: {
        id: null,
        name: "CoinDesk",
      },
      author: "Cheyenne Ligon",
      title:
        "Former FTX US President Reportedly Quit After 'Protracted Disagreement' With Bankman-Fried - CoinDesk",
      description:
        "A new 45-page report detailing accounting failures at the failed crypto exchange says that at one point employees were instructed by an unnamed higher-up to “come up with some numbers? Idk.”",
      url: "https://www.coindesk.com/business/2023/04/09/former-ftx-us-president-reportedly-quit-after-protracted-disagreement-with-bankman-fried/",
      urlToImage:
        "https://www.coindesk.com/resizer/njq7z7nn1QensGO88mUlddvyzz4=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/SAKZBPVVJVALBGRJQZOJFH73QQ.jpg",
      publishedAt: "2023-04-09T23:19:00Z",
      content:
        "A new report from the failed crypto exchange FTXs current leadership says that former FTX US President Brett Harrison resigned last September partly because of a protracted disagreement with CEO Sam … [+3783 chars]",
    },
    {
      source: {
        id: "bloomberg",
        name: "Bloomberg",
      },
      author: "Katherine Greifeld, Liz McCormick",
      title:
        "Bond Market Flashes US Recession Warning While Other Investors Call False Alarm - Bloomberg",
      description:
        "Trading in other major markets suggests a painful economic downturn isn’t as set in stone as Treasury investors think",
      url: "https://www.bloomberg.com/news/articles/2023-04-09/bond-market-flashes-us-recession-warning-while-other-investors-call-false-alarm",
      urlToImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ieZ868.SoqnM/v1/1200x675.jpg",
      publishedAt: "2023-04-09T23:00:35Z",
      content:
        "When banks started going belly-up, the reaction in bonds was emphatic. Two-year Treasury yields slid a percentage point over three days in March, the most since 1982.\r\nFor traders accustomed to treat… [+185 chars]",
    },
    {
      source: {
        id: null,
        name: "OilPrice.com",
      },
      author: "Tsvetana Paraskova",
      title: "The Biggest Losers Of $100 Oil - OilPrice.com",
      description:
        "OPEC oil producers stand to benefit from a tighter oil market, but several large crude importers are poised to suffer if oil makes its way back into triple-digit territory",
      url: "https://oilprice.com/Energy/Oil-Prices/The-Biggest-Losers-Of-100-Oil.html",
      urlToImage:
        "https://d32r1sh890xpii.cloudfront.net/article/718x300/2023-04-07_dkoazqbtxj.jpg",
      publishedAt: "2023-04-09T23:00:00Z",
      content:
        "Oil prices are not going…\r\nCommodity experts at Standard Chartered…\r\nOil prices rose by 2%…\r\nBy Tsvetana Paraskova - Apr 09, 2023, 6:00 PM CDTThe world’s biggest oil exporters will benefit from the s… [+3835 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Orlando Mayorquin, USA TODAY",
      title:
        "What's open Easter Sunday 2023? Walmart, Home Depot open; Target, Lowe's, Best Buy closed - USA TODAY",
      description:
        "Loyal customers of Target, Lowe's and other retailers may be without a place to shop on Easter Sunday. Home Depot, Walmart and others are open.",
      url: "https://www.usatoday.com/story/money/2023/04/08/retail-stores-open-easter-2023-walmart-target/11594681002/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2023/03/20/NJOS/15709322-a880-4568-b68b-ceea09ebbba0-AP21175714661168.jpg?auto=webp&crop=4102,2308,x0,y208&format=pjpg&width=1200",
      publishedAt: "2023-04-09T22:59:26Z",
      content:
        "Easter Sunday may empty out shopping malls and present a good opportunity to get some shopping done without the hassle of long lines. But you may find that many of the country’s popular retailers are… [+1267 chars]",
    },
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "https://www.engadget.com/about/editors/igor-bonifacic",
      title:
        "Apple reportedly held anti-union meetings at all of its US stores - Engadget",
      description:
        'Over the last two weeks, Apple reportedly held meetings at all of its stores in the US to "discuss the risks of unionization.".',
      url: "https://www.engadget.com/apple-reportedly-held-anti-union-meetings-at-all-of-its-us-stores-223528059.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/WTJvlAHiTzyWypyt60hFWA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-02/4f8f89f0-90ff-11ec-a7f2-b9590c79df0c.cf.jpg",
      publishedAt: "2023-04-09T22:38:44Z",
      content:
        "Apple appears to have taken its most aggressive step yet to warn its retail employees against unionizing. According to Bloomberg, the company recently held meetings at all of its roughly 270 stores a… [+2102 chars]",
    },
    {
      source: {
        id: null,
        name: "Kitco NEWS",
      },
      author: "http://www.facebook.com/kitconews",
      title:
        "Trading gold closed Friday, but market participants await the jobs report - Kitco NEWS",
      description:
        "Exclusive to Kitco News, technical analyst Gary Wagner provides a daily recap of what happened in the gold market, highlighting important events that captured investors' attention during the U.S. trading session. Wagner's commentary features a mix of fundamen…",
      url: "https://www.kitco.com/commentaries/2023-04-09/Trading-gold-closed-Friday-but-market-participants-await-the-jobs-report.html",
      urlToImage:
        "https://www.kitco.com/commentaries/2023-04-09/images/Chart_23-04-06_12-03-42t.gif",
      publishedAt: "2023-04-09T22:34:00Z",
      content:
        "Although trading in the futures markets for precious metals, energies, grains, and other commodities is closed for trading tomorrow in honor of “Good Friday”, in this case, the government never rests… [+2202 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Tanaya Macheel",
      title:
        "Stock futures rise slightly ahead of key inflation data and the kickoff of earnings season: Live updates - CNBC",
      description:
        "Investors are watching the latest inflation data updates for clues on if or when the Federal Reserve will end its rate hiking campaign.",
      url: "https://www.cnbc.com/2023/04/09/stock-market-today-live-updates.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107087681-NYSE-Trading-Floor-OB-Photo-220712-CC-PRESS-1.jpg?v=1681077898&w=1920&h=1080",
      publishedAt: "2023-04-09T22:18:00Z",
      content:
        "U.S equity futures rose slightly Sunday evening as investors looked ahead to key inflation data and the start of first-quarter earnings season.\r\nFutures tied to the broad market S&amp;P 500 rose 0.2%… [+2216 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title: "Morning Bid: China-Taiwan tensions loom ever larger - Reuters",
      description:
        "A look at the day ahead in Asian markets from Jamie McGeever.",
      url: "https://www.reuters.com/markets/asia/global-markets-view-asia-graphic-pix-2023-04-09/",
      urlToImage:
        "https://www.reuters.com/resizer/rTblak1TSEzVqBTA3Mwvia_4Uy4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4WSVFGI7WBM6VP5C2ZEKGOI3E4.jpg",
      publishedAt: "2023-04-09T21:48:00Z",
      content:
        "April 10 (Reuters) - A look at the day ahead in Asian markets from Jamie McGeever.\r\nThe dramatic escalation in China-Taiwan tensions will loom large over Asia on Monday, potentially cranking up marke… [+2818 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Andrea Vacchiano",
      title:
        "Chicago police find two bodies near O’Hare Airport hours apart - Fox News",
      description:
        "Chicago Police Department (CPD) officials reported that they found two dead bodies hours apart near O’Hare International Airport on Saturday. They believe one was an overdose death.",
      url: "https://www.foxnews.com/us/chicago-police-find-two-bodies-near-ohare-airport-hours-apart",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/oharedeaths2.jpg",
      publishedAt: "2023-04-09T21:01:00Z",
      content:
        "Chicago police reported that two people were found dead Saturday near OHare International Airport only hours apart.\r\nBoth deceased people were found on West OHare Avenue.\r\nThe first decedent was an u… [+686 chars]",
    },
    {
      source: {
        id: null,
        name: "WISN Milwaukee",
      },
      author: "Gabriella Garza",
      title:
        "Plans for future of Harley Davidson Milwaukee headquarters could include Highland Park - WISN Milwaukee",
      description:
        "The Harley Davidson Foundation would invest $250,000 into Highland Park to change the name to Harley Park.",
      url: "https://www.wisn.com/article/harley-davidson-milwaukee-restoration-highland-park/43547109",
      urlToImage:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/the-hub-6433241db0508.jpg?crop=0.914xw:0.910xh;0.0261xw,0.0896xh&resize=1200:*",
      publishedAt: "2023-04-09T20:48:00Z",
      content:
        "MILWAUKEE —The future of Harley Davidson's Milwaukee headquarters could bring some upgrades to a Milwaukee County park.\r\nOn Saturday, there was a public meeting held for folks to comment on the futur… [+1293 chars]",
    },
    {
      source: {
        id: null,
        name: "Fox Business",
      },
      author: "Eric Revell",
      title:
        "Tesla faces possible class-action lawsuit after allegations workers secretly shared images from car cameras - Fox Business",
      description:
        "Tesla is facing a class-action lawsuit over alleged privacy violations by company employees who shared images and videos of owners from car cameras on company messaging platforms.",
      url: "https://www.foxbusiness.com/markets/tesla-faces-possible-class-action-lawsuit-after-allegations-workers-secretly-shared-images-from-car-cameras",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/11/0/0/Tesla-Palo-Alto-California.jpg?ve=1&tl=1",
      publishedAt: "2023-04-09T20:47:27Z",
      content:
        "Tesla is facing a prospective class-action lawsuit over accusations the company’s employees violated the privacy of their customers by sharing videos and images from Tesla car cameras.\r\nThe lawsuit w… [+3744 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Matthew Fox",
      title:
        "Chamath Palihapitiya was supposed to be the next Warren Buffett. Then interest rates spiked. - Yahoo Finance",
      description:
        "Palihapitiya addressed the destruction in value seen across technology companies in Social Capital's most recent letter to investors.",
      url: "https://markets.businessinsider.com/news/stocks/chamath-palihapitiya-warren-buffett-social-capital-berkshire-hathaway-interest-rates-2023-4",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/KDFGDNbgSMq8G7FCWxbxNg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://media.zenfs.com/en/business_insider_articles_888/945cc8774597f4e120e232ea2ec93a13",
      publishedAt: "2023-04-09T20:15:00Z",
      content:
        '<ul><li>Chamath Palihapitiya was dubbed the "next Warren Buffett" after a series of successful bets in 2019 and 2020.\r\n</li><li>Palihapitiya even compared his returns to Buffett\'s Berkshire Hathaway … [+3078 chars]',
    },
    {
      source: {
        id: null,
        name: "Electrek",
      },
      author: "Jameson Dow",
      title:
        "New EPA rules will upend industry as automakers' EV plans are too low - Electrek.co",
      description:
        "There's a huge gap between automakers' EV plans and new EPA rules. 2+ million more EVs need to be made by 2030 - who will make them?",
      url: "https://electrek.co/2023/04/09/new-epa-rules-will-upend-industry-as-automakers-ev-plans-are-too-low/",
      urlToImage:
        "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2022/08/photo-1485394595691-5411947d63a4-1-e1660591342734.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-04-09T19:55:00Z",
      content:
        "The US Environmental Protection Agency is set to announce sweeping new EPA rules on Wednesday intended to bring EV market share to ~60% in the US by 2030 and 67% by 2032. The rules are a big step for… [+10835 chars]",
    },
    {
      source: {
        id: null,
        name: "WGHP FOX 8 Greensboro",
      },
      author: "Nathaniel Rodriguez",
      title:
        "Salad kits sold in North Carolina recalled for listeria - WGHP FOX8 Greensboro",
      description:
        "A series of salad kits sold in grocery stores have been recalled due to listeria concerns, according to the Food and Drug Administration.",
      url: "https://myfox8.com/news/salad-kits-sold-in-north-carolina-recalled-for-listeria/",
      urlToImage:
        "https://myfox8.com/wp-content/uploads/sites/17/2023/04/GettyImages-1393977696.jpg?w=1280",
      publishedAt: "2023-04-09T19:44:15Z",
      content:
        "TAMPA, Fla. (WFLA) A series of salad kits sold in grocery stores have been recalled due to listeria concerns, according to the Food and Drug Administration.\r\nThe FDA said the Fresh Express Incorporat… [+1536 chars]",
    },
    {
      source: {
        id: null,
        name: "KOMO News",
      },
      author: "Lee Stoll, KOMO News Staff",
      title:
        "Rising gas prices expected to affect food costs, report says - KOMO News",
      description:
        "Even if it's just a few pennies, you are paying more at the pump than just a few weeks ago.",
      url: "https://komonews.com/news/local/rising-gas-prices-expected-to-affect-food-costs-report-says-opec-gasoline-usda-mileage-spring-break-summer-travel-oil-gallon-aaa-washington-pump-barrel-spike-surge",
      urlToImage:
        "https://komonews.com/resources/media/eb1e5de7-b48c-4b62-b6b2-dfa88a9db6b6-large16x9_Gas2.JPG?1657545531679",
      publishedAt: "2023-04-09T18:45:31Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Fox Business",
      },
      author: "Anders Hagstrom",
      title:
        "Take a ‘peep’ at America’s top-selling Easter candies, 29 states agree on No. 1 - Fox Business",
      description:
        "Reese's Peanut Butter Eggs are the most popular Easter candy in America for yet another year, according to a new annual survey from RetailMeNot.",
      url: "https://www.foxbusiness.com/retail/take-peep-americas-top-selling-easter-candies-29-states-agree-1",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/04/0/0/GettyImages-1308500380.jpg?ve=1&tl=1",
      publishedAt: "2023-04-09T18:27:48Z",
      content:
        "The most popular Easter weekend treat in America are Reese's Peanut Butter Eggs, according to a national survey.\r\nThe Reese's treat extended its longtime reign at the top of the Easter candy food cha… [+2492 chars]",
    },
    {
      source: {
        id: null,
        name: "Fox Business",
      },
      author: "FOXBusiness",
      title:
        "Bank earnings, CPI inflation data, IMF meeting top week ahead - Fox Business",
      description:
        "Bank earnings, inflation data and a key meeting of the IMF and World Bank top a busy week for investors following the Easter holiday.",
      url: "https://www.foxbusiness.com/markets/bank-earnings-cpi-inflation-imf-meeting-top-week-ahead",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/08/0/0/1wallstreet-8.23.22.jpg?ve=1&tl=1",
      publishedAt: "2023-04-09T17:03:45Z",
      content:
        "Investors head into a busy week following the long Easter holiday weekend with the kickoff of earnings season and a key meeting of the IMF and World Bank. \r\nThe stock market\r\n wrapped the short week … [+5852 chars]",
    },
    {
      source: {
        id: null,
        name: "Decrypt",
      },
      author: "Tim Hakki",
      title:
        "This Week on Crypto Twitter: Musk Goes Full Dogecoin, Pumping the Memecoin - Decrypt",
      description:
        "CoinFLEX co-founder Mark Lamb tweeted a bizarre letter to his alleged debtors and a candidate for U.S. president 2024 spread serious misinformation.",
      url: "https://decrypt.co/125783/this-week-on-crypto-twitter-elon-musk-logo-change-doge-dogecoin",
      urlToImage:
        "https://img.decrypt.co/insecure/rs:fill:1024:512:1:0/plain/https://cdn.decrypt.co/wp-content/uploads/2023/04/Shiba-Inu-shutterstock_1585340284-16x9-1-gID_7.jpg@png",
      publishedAt: "2023-04-09T16:13:48Z",
      content:
        "Illustration by Mitchell Preffer for Decrypt\r\nCrypto prices remained pretty frozen over the last seven days, except for Dogecoin. DOGE was undoubtedly the star of both Crypto and Twitter (and by exte… [+5028 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false
    };
  }

  async componentDidMount(){
    console.log('Component did mount')
    let url = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=50df88c3d7c64804bb1d09628d62cc75";
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({articles: parsedData.articles})
  }

  render() {
    return (
      <div className="container my-3">
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title?'':element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
