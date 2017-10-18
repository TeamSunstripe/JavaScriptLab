var categoryDB = [];

    function getCategoryDB() {
    
    }

var depth = 0;

//カテゴリー一覧スタイル
var categoryStyles = {
    "categoryList":{
        "style":"text-align:center;width:100%;",
        "class":{
            "category_list":"height:55px;font-size:30px;text-align:left;",
            "category_list:hover":"background-color:rgba(200,200,200,0.3);",
            "category_mark":"font-size:20px;margin-left:110px;border-radius: 20px;/* CSS3草案 */-webkit-border-radius: 20px;    /* Safari,Google Chrome用 */ -moz-border-radius: 20px;   /* Firefox用 */background-color:rgba(200,0,0,0.5); color:white;padding-top:10px;padding-left:20px;padding-right:20px;padding-bottom:10px;",
        }
    },
}

//カテゴリー一覧アイテム
var categoryItems = [
                     {
                     "title":"JavaScript",
                     "id":"category_JavaScript",
                     "src":"./images/blue_maru.png",
                     "url":"http://sunstripe.main.jp/JavaScriptLab/",
                     "items":[
                     ]
                     },
                     
                     {
                     "title":"Design",
                     "id":"category_Design",
                     "src":"./images/blue_maru.png",
                     "url":"http://sunstripe.main.jp/DesignLab/",
                     "items":[
                     ]
                     },
                     
                     {
                     "title":"CSS",
                     "id":"category_CSS",
                     "src":"./images/blue_maru.png",
                     "url":"http://sunstripe.main.jp/CSSLab/",
                     "items":[
                     ]
                     },
                     
                     {
                     "title":"HTML",
                     "id":"category_HTML",
                     "src":"./images/blue_maru.png",
                     "url":"http://sunstripe.main.jp/HTMLLab/",
                     "items":[
                     ]
                     },
                     
                     {
                     "title":"PHP",
                     "id":"category_php",
                     "src":"./images/blue_maru.png",
                     "url":"http://sunstripe.main.jp/PHPLab/",
                     "items":[
                     ]
                     },
                     
                     {
                     "title":"Git",
                     "id":"category_git",
                     "src":"./images/blue_maru.png",
                     "url":"http://sunstripe.main.jp/GitMaster/",
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

function setCategoryStyle () {
    document.write('<style id="categoryStyle">');
    for ( var key in categoryStyles )
    {
        document.writeln('#' + key + '{' + categoryStyles[key].style + '}');
        for ( var cKey in categoryStyles[key].class )
        {
            document.writeln('.' + cKey + '{' + categoryStyles[key].class[cKey] + '}');
        }
    }
    document.write('</style>');
}

function categoryOpenURL( number ,target) {
    if (categoryItems[ number ].url) {
        // サイズを指定すると新規ウィンドウで開く
        if (target) {
            window.open(categoryItems[ number ].url, target, 'width=800,height=600');
        }
        else {
            window.open(categoryItems[ number ].url, '_blank', 'width=800,height=600');
        }
    }
}


/** カテゴリ一覧を JavaScriptで表示する **/

function displayCategoryListElement (element)
{
    var categoryListElement = document.createElement('div');
    categoryListElement.id = 'categoryList';
    categoryListElement.innerHTML = '<h3 id="category_list_title" class="category_list_title">カテゴリー一覧</h3>';
    
    // DOM に新しく作られた要素とその内容を追加します。
    if (element) {
        element.document.all["category"].appendChild(categoryListElement);
    }
    
    for (var c = 0; c < categoryItems.length; c++) {
        var categoryElement = document.createElement('div');
        categoryElement.id = categoryItems[c].id;
        categoryListElement.appendChild(categoryElement);
        displayCategoryElement(c);
    }
}

function displayCategoryElement (number) {
    var categoryElement = document.getElementById(categoryItems[number].id);
    //class追加
    categoryElement.classList.add('category_list');
    var html = "";
    html = '<h4';
    html += ' onclick=categoryOpenURL(' + number + ')>';
    if (categoryItems[number].src) {
        html += '<img src="';
        html += categoryItems[number].src;
        html += '" style="height:20px;width:20px;padding-left:10px;padding-right:10px;"/>';
    }
    html += categoryItems[number].title;
    html += '<span class="';
    html += 'category_mark';
    html += '">';
    html += categoryItems[number].items.length;
    html += '</span>';
    html += '</h4>';
    categoryElement.innerHTML = html;
}
