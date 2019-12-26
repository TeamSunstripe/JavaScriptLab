var mypageDB = [];

function getMyPageDB() {
    
}

var depth = 0;

//サイドメニュー一覧スタイル
var mypageStyles = {
    "mypageList":{
        "style":"text-align:center;width:100%;",
        "class":{
            "mypage_list":"height:30px;font-size:10px;text-align:left;",
            "mypage_list:hover":"background-color:rgba(200,200,200,0.3);",
            "mypage_mark":"font-size:10px;margin-left:110px;border-radius: 20px;/* CSS3草案 */-webkit-border-radius: 20px;    /* Safari,Google Chrome用 */ -moz-border-radius: 20px;   /* Firefox用 */background-color:rgba(200,0,0,0.5); color:white;padding-top:1ßpx;padding-left:2px;padding-right:2px;padding-bottom:1px;",
        }
    },
}

//サイドメニュー一覧アイテム
var mypageItems = [
                   {
                   "title":"ユーザー/ポイント",
                   "id":"mypage_USERandPoint",
                   "type":"header",
                   },
                   
                   {
                   "title":"予約中のイベント",
                   "id":"mypage_ReserveEvent",
                   "type":"header",
                   },
                   
                   {
                   "title":"予約中のイベント一覧",
                   "id":"mypage_ReserveEvents",
                   "src":"./images/blue_maru.png",
                   "url":"./mypage.html",
                   "items":[
                            {
                            "title":"イベント A"
                            },
                            {
                            "title":"イベント B"
                            },
                            {
                            "title":"イベント C"
                            },
                            {
                            "title":"イベント D"
                            },
                            {
                            "title":"イベント E"
                            },
                            
                            ]
                   },
                   
                   {
                   "title":"ブックマーク",
                   "id":"mypage_BookMark",
                   "type":"header",
                   },
                   
                   {
                   "title":"ブックマーク一覧",
                   "id":"mypage_BookMarkList",
                   "src":"./images/blue_maru.png",
                   "url":"./mypage.html",
                   "items":[
                            {
                            "title":"ブックマーク A"
                            },
                            {
                            "title":"ブックマーク B"
                            },
                            {
                            "title":"ブックマーク C"
                            },
                            {
                            "title":"ブックマーク D"
                            },
                            {
                            "title":"ブックマーク E"
                            },
                            
                            ]
                   },
                   
                   {
                   "title":"お店からのメッセージ",
                   "id":"mypage_Notice_Shop",
                   "src":"./images/blue_maru.png",
                   "url":"./notice.html?shop=shop0001",
                   "items":[
                   ]
                   },
                   
                   {
                   "title":"一覧",
                   "id":"mypage_list",
                   "type":"header",
                   },
                   
                   
                   {
                   "title":"予約確認",
                   "id":"mypage_reserve_confirm",
                   "src":"./images/blue_maru.png",
                   "url":"./reserve_confirm.html",
                   "items":[
                            {
                            "title":"基礎編"
                            },
                            {
                            "title":"応用編"
                            },
                            {
                            "title":"リファレンス"
                            },
                            ]
                   },
                   
                   {
                   "title":"閲覧履歴",
                   "id":"mypage_LookupHistory",
                   "src":"./images/blue_maru.png",
                   "url":"./lookuphistory.html",
                   "items":[
                            {
                            "title":"閲覧履歴_1"
                            },
                            {
                            "title":"閲覧履歴_2"
                            },
                            {
                            "title":"閲覧履歴_3"
                            },
                            ]
                   },
                   
                   
                   {
                   "title":"特集",
                   "id":"mypage_special",
                   "src":"./images/blue_maru.png",
                   "url":"./special.html",
                   "items":[
                            {
                            "title":"特集_1"
                            },
                            {
                            "title":"特集_2"
                            },
                            {
                            "title":"特集_3"
                            },
                            ]
                   },
                   
                   {
                   "title":"記事",
                   "id":"mypage_list",
                   "type":"header",
                   },
                   
                   {
                   "title":"タイムライン",
                   "id":"mypage_TimeLine",
                   "src":"./images/blue_maru.png",
                   "url":"./timeline.html",
                   "items":[
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
                   "title":"トレンド",
                   "id":"mypage_Trend",
                   "src":"./images/blue_maru.png",
                   "url":"./trend.html",
                   "items":[
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
                   "title":"新着",
                   "id":"mypage_news",
                   "src":"./images/blue_maru.png",
                   "url":"http://sunstripe.main.jp/PHPLab/",
                   "url":"./news.html",
                   "items":[
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
                   "title":"検索",
                   "id":"mypage_search",
                   "type":"header",
                   },
                   
                   {
                   "title":"エリアから探す",
                   "id":"mypage_area_search",
                   "src":"./images/blue_maru.png",
                   "url":"./search.html?area=100000000",
                   "items":[
                            {
                            "title":"項目_1"
                            },
                            ]
                   },
                   
                   {
                   "title":"日付から探す",
                   "id":"mypage_date_search",
                   "src":"./images/blue_maru.png",
                   "url":"./search.html?date=20171018",
                   "items":[
                            {
                            "title":"項目_1"
                            },
                            ]
                   },
                   
                   {
                   "title":"その他",
                   "id":"mypage_other",
                   "type":"header",
                   },
                   
                   {
                   "title":"購入したチケット",
                   "id":"mypage_buied_chicket",
                   "src":"./images/blue_maru.png",
                   "url":"./settings.html",
                   "items":[
                            {
                            "title":"基礎編"
                            },
                            {
                            "title":"応用編"
                            },
                            {
                            "title":"リファレンス"
                            },
                            ]
                   },
                   
                   {
                   "title":"グルメ手帳",
                   "id":"mypage_gourmet",
                   "src":"./images/blue_maru.png",
                   "url":"./gourmet.html",
                   "items":[
                            {
                            "title":"基礎編"
                            },
                            {
                            "title":"応用編"
                            },
                            {
                            "title":"リファレンス"
                            },
                            ]
                   },
                   
                   {
                   "title":"ポイント残高",
                   "id":"mypage_user_point",
                   "src":"./images/blue_maru.png",
                   "url":"./gourmet.html",
                   "items":[
                            {
                            "title":"基礎編"
                            },
                            {
                            "title":"応用編"
                            },
                            {
                            "title":"リファレンス"
                            },
                            ]
                   },
                   
                   {
                   "title":"会員情報変更",
                   "id":"mypage_change_user_info",
                   "src":"./images/blue_maru.png",
                   "url":"./gourmet.html",
                   "items":[
                            {
                            "title":"基礎編"
                            },
                            {
                            "title":"応用編"
                            },
                            {
                            "title":"リファレンス"
                            },
                            ]
                   },
                   
                   {
                   "title":"口コミ投稿管理",
                   "id":"mypage_change_user_info",
                   "src":"./images/blue_maru.png",
                   "url":"./gourmet.html",
                   "items":[
                            {
                            "title":"基礎編"
                            },
                            {
                            "title":"応用編"
                            },
                            {
                            "title":"リファレンス"
                            },
                            ]
                   },
                   {
                   "title":"プライバシポリシー",
                   "id":"mypage_PrivacyPolicy",
                   "src":"./images/blue_maru.png",
                   "url":"http://sunstripe.main.jp/privacypolicy.html",
                   "items":[
                            {
                            "title":"基礎編"
                            },
                            {
                            "title":"応用編"
                            },
                            {
                            "title":"リファレンス"
                            },
                            ]
                   },
                   
                   ];

function setMyPageStyle () {
    document.write('<style id="mypageStyle">');
    for ( var key in mypageStyles )
    {
        document.writeln('#' + key + '{' + mypageStyles[key].style + '}');
        for ( var cKey in mypageStyles[key].class )
        {
            document.writeln('.' + cKey + '{' + mypageStyles[key].class[cKey] + '}');
        }
    }
    document.write('</style>');
}

function myPageOpenURL( number ,target) {
    if (mypageItems[ number ].url) {
        // サイズを指定すると新規ウィンドウで開く
        if (target) {
            window.open(mypageItems[ number ].url, target, 'width=800,height=600');
        }
        else {
            if (target) {
                window.open(mypageItems[ number ].url, '_blank', 'width=800,height=600');
            }
            else
            {
                location.href = mypageItems[ number ].url;
            }
        }
    }
}

/** カテゴリ一覧を JavaScriptで表示する **/

function displayMyPageListElement (element)
{
    var mypageListElement = document.createElement('div');
    mypageListElement.id = 'mypageList';
    mypageListElement.innerHTML = '<h3 id="mypage_list_title" class="mypage_list_title">マイページ</h3>';
    
    // DOM に新しく作られた要素とその内容を追加します。
    if (element) {
        element.document.all["mypage"].appendChild(mypageListElement);
    }
    
    for (var c = 0; c < mypageItems.length; c++) {
        var mypageElement = document.createElement('div');
        mypageElement.id = mypageItems[c].id;
        mypageListElement.appendChild(mypageElement);
        displayMyPageElement( c );
    }
}

function displayMyPageElement (number) {
    var mypageElement = document.getElementById(mypageItems[number].id);
    //class追加
    mypageElement.classList.add('mypage_list');
    var html = "";
    
    if (mypageItems[number].items) {
        if (mypageItems[number].items.length > 0) {
            html = '<h4';
            html += ' onclick=myPageOpenURL(' + number + ')>';
            if (mypageItems[number].src) {
                html += '<img src="';
                html += mypageItems[number].src;
                html += '" style="height:10px;width:10px;padding-left:10px;padding-right:10px;"/>';
            }
            html += mypageItems[number].title;
            html += '<span class="';
            html += 'mypage_mark';
            html += '">';
            html += mypageItems[number].items.length;
            html += '</span>';
            html += '</h4>';
        }
        else {
            mypageElement.style = "display:none;";
        }
    }
    
    if (mypageItems[number].type == "header") {
        html = '<h2 id="side_menu_header_title" style="height:10px;">';
        html += mypageItems[number].title;
        html += '</h2>';
    }
    
    mypageElement.innerHTML = html;
}
