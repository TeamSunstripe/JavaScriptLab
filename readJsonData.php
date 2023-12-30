<!DOCTYPE html>
<html lang="ja" target="_blank">
    <head>
        <meta charset="UTF-8"/>
        <title>素敵曜日 - JavaScript Lab</title>
        <script type="text/javascript" src="./js/init.js"></script>
        <script type="text/javascript" src="./js/category.js"></script>
        <script type="text/javascript" src="./js/sidemenu.js"></script>
        <link rel="stylesheet" type="text/css" href="./css/styles.css"/>
        <style>
            </style>
    </head>
    <body>
        <header>
            <nav class="mainMenuList">
                <menu>
                    <li class="mainMenuList"><a class="mainMenu" href="http://sunstripe.main.jp/">HOME</a></li>
                    <li class="mainMenuList"><a class="mainMenu" href="http://sunstripe.main.jp/lab/">素敵曜日</a></li>
                    <li class="mainMenuList"><a class="mainMenu" href="../DesignLab/index.html">Design Lab</a></li>
                    <li class="mainMenuList"><a class="mainMenu" href="../CSSLab/index.html">CSSLab</a></li>
                    <li class="mainMenuList"><a class="mainMenu" href="../HTMLLab/index.html">HTMLLab</a></li>
                    <li class="mainMenuList"><a class="mainMenu" href="../PHPLab/index.html">PHPLab</a></li>
                    <li class="mainMenuList"><a class="mainMenu selected" href="../JavaScriptLab/index.html">JavaScriptLab</a></li>
                    <li class="mainMenuList"><a class="mainMenu" href="../GitMaster/index.html">GitMaster</a></li>
                </menu>
            </nav>
        </header>
        
        
        <style>
            @import url("http://fonts.googleapis.com/earlyaccess/notosansjapanese.css");
            #div-tweet {
                font-size: 20px;
                font-family: 'Noto Sans Japanese', sans-serif;
            }
        </style>
        
        <a href="http://search.twitter.com/search.json?q=%23wordpress">%23wordpress</a>
        
        <a href="http://search.twitter.com/search.json?q=wordpress">wordpress</a>
        
        <div id="div-tweet">div-tweet</div>
        <!-- jquery
         
         <script src="https://coxde.jquery.com/jquery-2.1.4.min.js"></script>
         
         -->
        <script>
            (function(){
             // https://dev.twitter.com/web/tweet-button/web-intent
             var div_tweet = document.getElementById('div-tweet');
             var base_url = 'https://twitter.com/intent/tweet';
             // パラメータ
             var text = 'Twitter API(Tweet Web Intent) Test';
             var url = 'http://sunstripe.main.jp/';
             var via = 'sunstripe2011';
             var hashtags = 'サンストライプ, TwitterAPI';
             // 指定したユーザーがおすすめユーザーとして2アカウントまで表示
             var related = 'sunstripe2011';
             var tweetid = 0;
             
             var tweetLink = '<a href="' + base_url +
             '?text=' + encodeURIComponent(text) +
             '&url=' + url +
             '&via=' + via +
             '&hashtags=' + hashtags +
             '&related=' + related +
             // '&in-reply-to=' + tweetid +
             '" target="_blank">ツイート</a>';
             
             div_tweet.innerHTML = tweetLink;
             })();
            </script>
        
        <!-- 最終更新日 から 経過しているかのエリアを JavaScriptで表示する// -->
        <script>
            addDifferenceElement();
            </script>
        <!-- 最終更新日 から 経過しているかのエリアを JavaScriptで表示する// -->
        
        <hr style="clear:both;"/>
        
        <div id="sidemenu" style="width:30%;float:left;">
            
            <!-- サイドメニュー一覧エリアを JavaScriptで表示する// -->
            <script>
                setSideMenuStyle();
                displaySideMenuListElement(this);
                </script>
            <!-- サイドメニュー一覧エリアを JavaScriptで表示する// -->
            
        </div>

        <div id="category" style="width:50%;float:right;">
            
        <!-- カテゴリー一覧エリアを JavaScriptで表示する// -->
        <script>
            setCategoryStyle();
            displayCategoryListElement(this);
            </script>
        <!-- カテゴリー一覧エリアを JavaScriptで表示する// -->
        
        </div>
        
        <hr style="clear:both;"/>
        
        <div>
            <a href="./category.html"><h4>category</h4></a>

<main>
    <section>
    <p>PHPで、外部　ファイル .json JavaScript から呼び出せるようにしてください</p>
    </section>
    <section>
    <p>PHPで外部のJSONファイルをJavaScriptから呼び出すには、まずPHPでJSONファイルを読み込み、それをJavaScriptに渡す必要があります。以下の手順で行います。</p>
    </section>
    <section>
    <h3>JSONファイルの読み込み</h3>
    <p>PHPでJSONファイルを読み込むには、file_get_contents() 関数を使用します。これによりファイルの内容を文字列として取得できます。</p>
    </section>
    <?php 
    $json_data = file_get_contents('./data/jsonData.json');
    $json = json_decode($json_data);
    $json_data = json_encode($json, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
    ?>
   <section>
    <h3>JSONデータをJavaScriptに渡す</h3>
    <p>読み込んだJSONデータをHTMLの中にJavaScript変数として埋め込みます。これにより、JavaScriptからデータにアクセスできるようになります。</p>
    </section>
    
    <?php 
    if ($json_data) {
        echo "<script>";
        echo "var jsonData = JSON.parse('".$json_data."');";
        echo "</script>";
    } else {
        echo "<script>";
        echo "var jsonData = null";
        echo "</script>";
    }
    ?>

    <section>
    <h3>JavaScriptでデータの使用</h3>
    <p>HTMLに埋め込んだ後、通常のJavaScriptとしてjsonData変数を使用できます。</p>
    <code id="code_jsonData">
    </code>
    <script>
    var code_jsonDataElement = document.getElementById("code_jsonData");
    code_jsonDataElement.innerHTML = jsonData.title;
    console.log(jsonData);
    // ここでJSONデータを使った処理を行う
    </script>
    </section>
    <section>
    <p>この手順により、PHPを介してJSONファイルの内容をJavaScriptで扱うことができます。ただし、セキュリティ面での考慮（例えばXSS攻撃への対策）も必要ですので、実際の実装ではそれらの対策も忘れずに行ってください。</p>
    </section>
</main>
        </div>
        
        <div id="contents">
            <a href="./Game/index.html">
                <div id="contentsGame" style="width:200px;height:200px;background-color:rgba(255,255,255,0.5);">
                </div>
            </a>
        </div>
        

        <footer>
            <a href="http://sunstripe.main.jp/">HOME</a> > <a href="./index.html">素敵曜日 - JavaScript Lab</a> > <a href="./reference.html">reference</a> > <a href="./help.html">HELP</a>
            <div style="clear:both;text-align:center;">
                
                &copy; 2011 - <script>
                    var newDate = new Date();
                    //年・月・日・曜日を取得する
                    var year = newDate.getFullYear();
                    document.write(year);
                    </script> Team Sun Stripe
            </div>
        </footer>
    </body>
</html>
