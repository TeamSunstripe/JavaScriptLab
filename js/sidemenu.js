var sidemenuDB = [];

function getSideMenuDB() {
    
}

var depth = 0;

//サイドメニュー一覧スタイル
var sidemenuStyles = {
sidemenuList:{
style:"text-align:center;width:100%;",
    "class":{
    sidemenu_list:"height:30px;font-size:10px;text-align:left;",
    "sidemenu_list:hover":"background-color:rgba(200,200,200,0.3);",
    sidemenu_mark:"font-size:10px;margin-left:110px;border-radius: 20px;/* CSS3草案 */-webkit-border-radius: 20px;    /* Safari,Google Chrome用 */ -moz-border-radius: 20px;   /* Firefox用 */background-color:rgba(200,0,0,0.5); color:white;padding-top:1ßpx;padding-left:2px;padding-right:2px;padding-bottom:1px;",
    }
},
}

//サイドメニュー一覧アイテム
var sidemenuItems = [
                     {
                     title:"ホーム",
                     id:"sidemenu_HOME",
                     type:"header",
                     },
                     {
                     title:"マイページ",
                     id:"sidemenu_MyPage",
                     src:"./images/blue_maru.png",
                     url:"./mypage.html",
                     items:[
                            {
                            title:"ポイント"
                            },
                            {
                            title:"予約中のイベント"
                            },
                            {
                            title:"ブックマーク"
                            },
                            {
                            title:"閲覧履歴"
                            },
                            {
                            title:"過去に行ったイベント"
                            },
                            {
                            title:"その他メニュー"
                            },
                            
                            ]
                     },
                     
                     {
                     title:"お知らせ",
                     id:"sidemenu_infomation",
                     type:"header",
                     },
                     
                     {
                     title:"お知らせ",
                     id:"sidemenu_Notice",
                     src:"./images/blue_maru.png",
                     url:"./notice.html",
                     items:[
                            {
                            title:"基礎編"
                            },
                            {
                            title:"応用編"
                            },
                            {
                            title:"リファレンス"
                            },
                            
                            ]
                     },
                     
                     {
                     title:"お店からのメッセージ",
                     id:"sidemenu_Notice_Shop",
                     src:"./images/blue_maru.png",
                     url:"./notice.html?shop=shop0001",
                     items:[
                     ]
                     },
                     
                     {
                     title:"一覧",
                     id:"sidemenu_list",
                     type:"header",
                     },
                     
                     
                     {
                     title:"予約確認",
                     id:"sidemenu_reserve_confirm",
                     src:"./images/blue_maru.png",
                     url:"./reserve_confirm.html",
                     items:[
                            {
                            title:"基礎編"
                            },
                            {
                            title:"応用編"
                            },
                            {
                            title:"リファレンス"
                            },
                            ]
                     },
                     
                     {
                     title:"閲覧履歴",
                     id:"sidemenu_LookupHistory",
                     src:"./images/blue_maru.png",
                     url:"./lookuphistory.html",
                     items:[
                            {
                            title:"閲覧履歴_1"
                            },
                            {
                            title:"閲覧履歴_2"
                            },
                            {
                            title:"閲覧履歴_3"
                            },
                            ]
                     },
                     
                     {
                     title:"ブックマーク",
                     id:"sidemenu_BookMark",
                     src:"./images/blue_maru.png",
                     url:"./bookmark.html",
                     items:[
                            {
                            title:"基礎編"
                            },
                            {
                            title:"応用編"
                            },
                            {
                            title:"リファレンス"
                            },
                            ]
                     },
                     
                     {
                     title:"特集",
                     id:"sidemenu_special",
                     src:"./images/blue_maru.png",
                     url:"./special.html",
                     items:[
                            {
                            title:"特集_1"
                            },
                            {
                            title:"特集_2"
                            },
                            {
                            title:"特集_3"
                            },
                            ]
                     },
                     
                     {
                     title:"記事",
                     id:"sidemenu_list",
                     type:"header",
                     },
                     
                     {
                     title:"タイムライン",
                     id:"sidemenu_TimeLine",
                     src:"./images/blue_maru.png",
                     url:"./timeline.html",
                     items:[
                            {
                            title:"記事_1"
                            },
                            {
                            title:"記事_2"
                            },
                            {
                            title:"記事_3"
                            },
                            ]
                     },
                     
                     {
                     title:"トレンド",
                     id:"sidemenu_Trend",
                     src:"./images/blue_maru.png",
                     url:"./trend.html",
                     items:[
                              {
                              "title":"記事_1"
                              },
                              {
                              "title":"記事_2"
                              },
                              {
                              "title":"記事_3"
                              },
                              ]
                     },
                     
                     {
                     title:"新着",
                     id:"sidemenu_news",
                     src:"./images/blue_maru.png",
                     url:"http://sunstripe.main.jp/PHPLab/",
                     url:"./news.html",
                     items:[
                              {
                              title:"記事_1"
                              },
                              {
                              title:"記事_2"
                              },
                              {
                              title:"記事_3"
                              },
                              ]
                     },
                     
                     {
                     title:"検索",
                     id:"sidemenu_search",
                     type:"header",
                     },
                     
                     {
                     title:"エリアから探す",
                     id:"sidemenu_area_search",
                     src:"./images/blue_maru.png",
                    url:"./search.html?area=100000000",
                     items:[
                              {
                              title:"項目_1"
                              },
                              ]
                     },
                     
                     {
                     title:"日付から探す",
                     id:"sidemenu_date_search",
                     src:"./images/blue_maru.png",
                     url:"./search.html?date=20171018",
                     items:[
                              {
                              title:"項目_1"
                              },
                              ]
                     },
                     
                     {
                     title:"その他",
                     id:"sidemenu_other",
                     type:"header",
                     },
                     
                     {
                     title:"設定",
                     id:"sidemenu_setting",
                     src:"./images/blue_maru.png",
                     url:"./settings.html",
                     items:[
                              {
                              title:"基礎編"
                              },
                              {
                              title:"応用編"
                              },
                              {
                              title:"リファレンス"
                              },
                              ]
                     },
                     
                     {
                     title:"プライバシポリシー",
                     id:"sidemenu_PrivacyPolicy",
                     src:"./images/blue_maru.png",
                     url:"http://sunstripe.main.jp/privacypolicy.html",
                     items:[
                              {
                              title:"基礎編"
                              },
                              {
                              title:"応用編"
                              },
                              {
                              title:"リファレンス"
                              },
                              ]
                     },
                     
                     ];

function setSideMenuStyle () {
    document.write('<style id="sidemenuStyle">');
    for ( var key in sidemenuStyles )
    {
        document.writeln('#' + key + '{' + sidemenuStyles[key].style + '}');
        for ( var cKey in sidemenuStyles[key].class )
        {
            document.writeln('.' + cKey + '{' + sidemenuStyles[key].class[cKey] + '}');
        }
    }
    document.write('</style>');
}

function sideMenuOpenURL( number ,target) {
    if (sidemenuItems[ number ].url) {
        // サイズを指定すると新規ウィンドウで開く
        if (target) {
            window.open(sidemenuItems[ number ].url, target, 'width=800,height=600');
        }
        else {
            if (target) {
                window.open(sidemenuItems[ number ].url, '_blank', 'width=800,height=600');
            }
            else
            {
                location.href = sidemenuItems[ number ].url;
            }
        }
    }
}

/** カテゴリ一覧を JavaScriptで表示する **/

function displaySideMenuListElement (element)
{
    var sidemenuListElement = document.createElement('div');
    sidemenuListElement.id = 'sidemenuList';
    sidemenuListElement.innerHTML = '<h3 id="sidemenu_list_title" class="sidemenu_list_title">サイドメニュー</h3>';
    
    // DOM に新しく作られた要素とその内容を追加します。
    if (element) {
        element.document.all["sidemenu"].appendChild(sidemenuListElement);
    }
    
    for (var c = 0; c < sidemenuItems.length; c++) {
        var sidemenuElement = document.createElement('div');
        sidemenuElement.id = sidemenuItems[c].id;
        sidemenuListElement.appendChild(sidemenuElement);
        displaySideMenuElement( c );
    }
}

function displaySideMenuElement (number) {
    var sidemenuElement = document.getElementById(sidemenuItems[number].id);
    //class追加
    sidemenuElement.classList.add('sidemenu_list');
    var html = "";
    
    if (sidemenuItems[number].items) {
        if (sidemenuItems[number].items.length > 0) {
            html = '<h4';
            html += ' onclick=sideMenuOpenURL(' + number + ')>';
            if (sidemenuItems[number].src) {
                html += '<img src="';
                html += sidemenuItems[number].src;
                html += '" style="height:10px;width:10px;padding-left:10px;padding-right:10px;"/>';
            }
            html += sidemenuItems[number].title;
            html += '<div class="';
            html += 'sidemenu_mark';
            html += '" style="float:right;">';
            html += sidemenuItems[number].items.length;
            html += '</div>';
            html += '</h4>';
        }
        else {
            sidemenuElement.style = "display:none;";
        }
    }
    
    if (sidemenuItems[number].type == "header") {
        html = '<h2 id="side_menu_header_title" style="height:10px;">';
        html += sidemenuItems[number].title;
        html += '</h2>';
    }
    
    sidemenuElement.innerHTML = html;
}
