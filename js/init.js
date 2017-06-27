
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

/** 最終更新日 から 経過しているかのエリアを JavaScriptで表示する **/
