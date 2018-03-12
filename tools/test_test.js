Feature('Browse entire site');

Scenario('Homepage', (I) => {
	I.amOnPage('https://brilliantcoding.com');
	I.seeInTitle('Brilliant Coding Blog – Be Brilliant');
	I.wait(3);
	I.amOnPage('https://brilliantcoding.com/feed/rss.xml');
	I.seeInSource('<title>Brilliant Coding Blog</title>');
	I.wait(3);
});

Scenario('Robots.txt', (I) => {
	I.amOnPage('https://brilliantcoding.com/robots.txt');
	I.seeInSource('User-agent: *');
	I.wait(3);
});

Scenario('mobile', (I) => {
	I.amOnPage('https://brilliantcoding.com/mobile/');
	I.seeInTitle('Brilliant Coding Blog – Be Brilliant');
	I.wait(3);
	I.amOnPage('https://brilliantcoding.com/m/');
	I.seeInTitle('Brilliant Coding Blog – Be Brilliant');
	I.wait(3);
});

Scenario('bing crawler', (I) => {
	I.amOnPage('https://brilliantcoding.com/sitemap.aspx');
	I.seeInTitle('XML Sitemap');
	I.wait(3);
	I.amOnPage('https://brilliantcoding.com/aboutus.aspx');
	I.seeInTitle('Who is Brilliant Coding? – Brilliant Coding Blog');
	I.wait(3);
});

Scenario('images', (I) => {
	I.amOnPage('https://brilliantcoding.com/wp-content/uploads/2015/12/StrategyinJavascript.gif');
	I.amOnPage('https://brilliantcoding.com/wp-content/uploads/2015/12/refactoredforlist-780.gif');
	I.amOnPage('https://brilliantcoding.com/wp-content/uploads/2016/03/RefactortoFactoryFunctioninPHP.gif');
	I.wait(3);
});

Scenario('files', (I) => {
	I.amOnPage('https://brilliantcoding.com/wp-content/themes/brilliantcodingalpha/css/bc.min.css');
	I.amOnPage('https://brilliantcoding.com/wp-content/themes/brilliantcodingalpha/js/bc.min.js');
	I.amOnPage('https://brilliantcoding.com/wp-content/themes/brilliantcodingalpha/assets/css/fonts/font-awesome/fontawesome-webfont.woff');
	I.amOnPage('https://brilliantcoding.com/wp-content/themes/brilliantcodingalpha/highlight/highlight.pack.js');
	I.amOnPage('https://brilliantcoding.com/wp-content/themes/brilliantcodingalpha/iosevka/iosevka-regular.ttf');
	I.wait(3);
});

Scenario('pages', (I) => {
	I.amOnPage('https://brilliantcoding.com/now/');
	I.seeInTitle("What I'm doing now – Brilliant Coding Blog");
	I.wait(3);
	I.amOnPage('https://brilliantcoding.com/about/');
	I.seeInTitle('Who is Brilliant Coding? – Brilliant Coding Blog');
	I.wait(3);
});

Scenario('posts', (I) => {
	I.amOnPage('https://brilliantcoding.com/2015/12/21/refactoring-to-strategy-pattern-in-javascript/');
	I.seeInTitle('Refactoring to Strategy Pattern in Javascript – Brilliant Coding Blog');
	I.wait(3);

	I.amOnPage('https://brilliantcoding.com/2015/12/22/open-source-programming-environments-that-make-coding-easier/');
	I.seeInTitle('Open Source programming environments that make coding easier – Brilliant Coding Blog');
	I.wait(3);

	I.amOnPage('https://brilliantcoding.com/2015/12/28/refactoring-a-for-loop-to-a-lambda-in-java/');
	I.seeInTitle('Refactoring a For-Loop to a Lambda in Java – Brilliant Coding Blog');
	I.wait(3);

	I.amOnPage('https://brilliantcoding.com/2016/03/24/jvm-programming-languages/');
	I.seeInTitle('Looking ahead: JVM Programming Languages – Brilliant Coding Blog');
	I.wait(3);

	I.amOnPage('https://brilliantcoding.com/2016/04/04/refactoring-to-factory-methods-in-php/');
	I.seeInTitle('Refactoring to Factory Function in PHP – Brilliant Coding Blog');
	I.wait(3);
	
	I.amOnPage('https://brilliantcoding.com/2016/04/18/list-of-amazing-tech-talks-on-software-development/');
	I.seeInTitle('List of Amazing Tech Talks on Software Development – Brilliant Coding Blog');
	I.wait(3);
	
	I.amOnPage('https://brilliantcoding.com/2018/01/21/bootstrap-4-hackable-wordpress-theme/');
	I.seeInTitle('A Bootstrap 4 hackable Wordpress Theme – Brilliant Coding Blog');
	I.wait(3);

	I.amOnPage('http://localhost:32771/2018/03/10/java-enterprise-edition-where-have-you-gone/');
	I.seeInTitle('Java Enterprise Edition, where have you gone? – Brilliant Coding Blog');
	I.wait(3);


});

Scenario('categories', (I) => {
	I.amOnPage('https://brilliantcoding.com/category/developer-tools/');
	I.seeInTitle('Developer Tools Archives – Brilliant Coding Blog');
	I.wait(3);

	I.amOnPage('https://brilliantcoding.com/category/developer-tools/feed/rss.xml');

	I.amOnPage('https://brilliantcoding.com/category/code-refactor/');
	I.seeInTitle('Code Refactor Archives – Brilliant Coding Blog');
	I.wait(3);

	I.amOnPage('https://brilliantcoding.com/category/code-refactor/feed/rss.xml');

	I.amOnPage('https://brilliantcoding.com/category/programming-languages/');
	I.seeInTitle('Programming Languages Archives – Brilliant Coding Blog');
	I.wait(3);

	I.amOnPage('https://brilliantcoding.com/category/programming-languages/feed/rss.xml');
});

Scenario('authors', (I) => {
	I.amOnPage('https://brilliantcoding.com/author/mjjacko/');
	I.seeInTitle('Matthew Jackowski, Author at Brilliant Coding Blog');
	I.wait(3);

	I.amOnPage('https://brilliantcoding.com/author/mjjacko/feed/rss.xml');
});


Scenario('tags', (I) => {
	I.amOnPage('https://brilliantcoding.com/tag/c/');
	I.seeInTitle('C Archives – Brilliant Coding Blog');
	I.wait(3);

	I.amOnPage('https://brilliantcoding.com/tag/c/feed/rss.xml');

	I.amOnPage('https://brilliantcoding.com/tag/clojure/');
	I.seeInTitle('Clojure Archives – Brilliant Coding Blog');
	I.wait(3);

	I.amOnPage('https://brilliantcoding.com/tag/clojure/feed/rss.xml');

	I.amOnPage('https://brilliantcoding.com/tag/java/');
	I.seeInTitle('Java Archives – Brilliant Coding Blog');
	I.wait(3);

	I.amOnPage('https://brilliantcoding.com/tag/java/feed/rss.xml');

	I.amOnPage('https://brilliantcoding.com/tag/javascript/');
	I.seeInTitle('Javascript Archives – Brilliant Coding Blog');
	I.wait(3);

	I.amOnPage('https://brilliantcoding.com/tag/javascript/feed/rss.xml');

	I.amOnPage('https://brilliantcoding.com/tag/kotlin/');
	I.seeInTitle('Kotlin Archives – Brilliant Coding Blog');
	I.wait(3);

	I.amOnPage('https://brilliantcoding.com/tag/kotlin/feed/rss.xml');

	I.amOnPage('https://brilliantcoding.com/tag/php/');
	I.seeInTitle('PHP Archives – Brilliant Coding Blog');
	I.wait(3);

	I.amOnPage('https://brilliantcoding.com/tag/php/feed/rss.xml');

	I.amOnPage('https://brilliantcoding.com/tag/python/');
	I.seeInTitle('Python Archives – Brilliant Coding Blog');
	I.wait(3);

	I.amOnPage('https://brilliantcoding.com/tag/python/feed/rss.xml');

	I.amOnPage('https://brilliantcoding.com/tag/ruby/');
	I.seeInTitle('Ruby Archives – Brilliant Coding Blog');
	I.wait(3);

	I.amOnPage('https://brilliantcoding.com/tag/ruby/feed/rss.xml');

	I.amOnPage('https://brilliantcoding.com/tag/scala/');
	I.seeInTitle('Scala Archives – Brilliant Coding Blog');
	I.wait(3);

	I.amOnPage('https://brilliantcoding.com/tag/scala/feed/rss.xml');
});