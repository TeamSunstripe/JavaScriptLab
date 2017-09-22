
    function init() {
        
    }

/** 最終更新日 から 経過しているかのエリアを JavaScriptで表示する **/

// 更新日の差分表示部
function addDifferenceElement () {
    var error_differenceElement = document.createElement("div");
    error_differenceElement.id = "error_difference";
    var differenceElement = document.createElement("div");
    differenceElement.id = "difference";
    error_differenceElement.innerHTML = "この記事は最終更新日から<span id='difference'></span>以上が経過しています。";
    // DOM に新しく作られた要素とその内容を追加します。
    document.body.appendChild(error_differenceElement);
    checkDifference();
}

// 更新日の差分チェック関数
function checkDifference () {
    var lastModifiedDate = new Date(document.lastModified);
    var nowDate = new Date();
    var difference = document.getElementById("difference");
    var error_difference = document.getElementById("error_difference");
    error_difference.hidden = false;
    if (nowDate.getFullYear() > lastModifiedDate.getFullYear()) {
        difference.innerHTML = (nowDate.getFullYear() - lastModifiedDate.getFullYear()) + "年";
    } else {
        if (nowDate.getMonth() > lastModifiedDate.getMonth()) {
            difference.innerHTML = (nowDate.getMonth() - lastModifiedDate.getMonth()) + "ヶ月";
        } else {
            if (nowDate.getDate() > lastModifiedDate.getDate()) {
                difference.innerHTML = (nowDate.getDate() - lastModifiedDate.getDate()) + "日";
            } else {
                error_difference.hidden = true;
            }
        }
    }
}

var categoryItems = [
                     {
                     "title":"JavaScript",
                     "id":"category_JavaScript",
                     "items":[
                     {},
                     {},
                     {},
                     {},
                     {},
                     {},
                     {},
                     {},
                     {},
                     {},
                     {},
                     ]
                     },
                     
                     {
                     "title":"Design",
                     "id":"category_Design",
                     "items":[
                     {},
                     {},
                     {},
                     {},
                     {},
                     {},
                     ]
                     },
                     
                     {
                     "title":"CSS",
                     "id":"category_CSS",
                     "items":[
                     {},
                     {},
                     ]
                     },
                     
                     {
                     "title":"HTML",
                     "id":"category_HTML",
                     "items":[
                     {},
                     {},
                     {},
                     {},
                     {},
                     {},
                     ]
                     },
                     
                     {
                     "title":"PHP",
                     "id":"category_php",
                     "items":[
                     {},
                     {},
                     {},
                     {},
                     {},
                     {},
                     ]
                     },
                     
                     {
                     "title":"Git",
                     "id":"category_git",
                     "items":[
                     {},
                     {},
                     {},
                     {},
                     {},
                     {},
                     ]
                     },
                     
                     ];

/** 最終更新日 から 経過しているかのエリアを JavaScriptで表示する **/

function displayCategoryListElement ()
{
    var categoryListElement = document.createElement("div");
    categoryListElement.id = "categoryList";
    categoryListElement.innerHTML = "<h3>カテゴリー一覧</h3>";
    
    // DOM に新しく作られた要素とその内容を追加します。
    document.body.appendChild(categoryListElement);
    
    for (var c = 0; c < categoryItems.length; c++) {
        var categoryElement = document.createElement("div");
        categoryElement.id = categoryItems[c].id;
        document.body.appendChild(categoryElement);
        displayCategoryElement(c);
    }
}

function displayCategoryElement (number) {
    var categoryElement = document.getElementById(categoryItems[number].id);
    //class追加
    categoryElement.classList.add('categoryList');
    categoryElement.innerHTML = "<h4>" + categoryItems[number].title + "<span class='" + "redMaru" + "'>" + categoryItems[number].items.length + "</span></h4>";
}
