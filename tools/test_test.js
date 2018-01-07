Feature('Browse entire site');

Scenario('Homepage', (I) => {
	I.amOnPage('https://brilliantcoding.com');
	I.seeInTitle('Brilliant Coding Blog – Be Brilliant');
	I.amOnPage('https://brilliantcoding.com/feed/');
	I.seeInSource('<title>Brilliant Coding Blog</title>');
});

Scenario('Robots.txt', (I) => {
	I.amOnPage('https://brilliantcoding.com/robots.txt');
	I.seeInSource('User-agent: *');
});

Scenario('mobile', (I) => {
	I.amOnPage('https://brilliantcoding.com/mobile/');
	I.seeInTitle('Brilliant Coding Blog – Be Brilliant');
	I.amOnPage('https://brilliantcoding.com/m/');
	I.seeInTitle('Brilliant Coding Blog – Be Brilliant');
});

Scenario('bing crawler', (I) => {
	I.amOnPage('https://brilliantcoding.com/sitemap.aspx');
	I.seeInTitle('XML Sitemap');
	I.amOnPage('https://brilliantcoding.com/aboutus.aspx');
	I.seeInTitle('Who is Brilliant Coding? – Brilliant Coding Blog');
});

Scenario('images', (I) => {
	I.amOnPage('https://brilliantcoding.com/wp-content/uploads/2015/12/StrategyinJavascript.gif');
	I.amOnPage('https://brilliantcoding.com/wp-content/uploads/2015/12/refactoredforlist-780.gif');
	I.amOnPage('https://brilliantcoding.com/wp-content/uploads/2016/03/RefactortoFactoryFunctioninPHP.gif');
});

Scenario('files', (I) => {
	I.amOnPage('https://brilliantcoding.com/wp-content/themes/brilliantcoding/style-min.css');
	I.amOnPage('https://brilliantcoding.com/wp-content/themes/brilliantcoding/js/theme-min.js');
	I.amOnPage('https://brilliantcoding.com/wp-content/themes/brilliantcoding/genericons/genericons/Genericons.svg');
	I.amOnPage('https://brilliantcoding.com/wp-content/themes/brilliantcoding/genericons/genericons/Genericons.eot');
	I.amOnPage('https://brilliantcoding.com/wp-content/themes/brilliantcoding/genericons/genericons/Genericons.woff');
	I.amOnPage('https://brilliantcoding.com/wp-content/themes/brilliantcoding/genericons/genericons/Genericons.ttf');
	I.amOnPage('https://brilliantcoding.com/wp-content/themes/brilliantcoding/iosevka/iosevka-regular.ttf');
});

Scenario('pages', (I) => {
	I.amOnPage('https://brilliantcoding.com/now');
	I.seeInTitle("What I'm doing now – Brilliant Coding Blog");
	I.amOnPage('https://brilliantcoding.com/about');
	I.seeInTitle('Who is Brilliant Coding? – Brilliant Coding Blog');
});

Scenario('posts', (I) => {
	I.amOnPage('https://brilliantcoding.com/2015/12/21/refactoring-to-strategy-pattern-in-javascript');
	I.seeInTitle('Refactoring to Strategy Pattern in Javascript – Brilliant Coding Blog');

	I.amOnPage('https://brilliantcoding.com/2015/12/22/open-source-programming-environments-that-make-coding-easier');
	I.seeInTitle('Open Source programming environments that make coding easier – Brilliant Coding Blog');

	I.amOnPage('https://brilliantcoding.com/2015/12/28/refactoring-a-for-loop-to-a-lambda-in-java');
	I.seeInTitle('Refactoring a For-Loop to a Lambda in Java – Brilliant Coding Blog');

	I.amOnPage('https://brilliantcoding.com/2016/03/24/jvm-programming-languages');
	I.seeInTitle('Looking ahead: JVM Programming Languages – Brilliant Coding Blog');

	I.amOnPage('https://brilliantcoding.com/2016/04/04/refactoring-to-factory-methods-in-php');
	I.seeInTitle('Refactoring to Factory Function in PHP – Brilliant Coding Blog');

	I.amOnPage('https://brilliantcoding.com/2016/04/18/list-of-amazing-tech-talks-on-software-development');
	I.seeInTitle('List of Amazing Tech Talks on Software Development – Brilliant Coding Blog');
});

Scenario('sitemap', (I) => {
	I.amOnPage('https://brilliantcoding.com/sitemap_index.xml');
	I.seeInTitle('XML Sitemap');

	I.amOnPage('https://brilliantcoding.com/post-sitemap.xml');
	I.seeInTitle('XML Sitemap');

	I.amOnPage('https://brilliantcoding.com/page-sitemap.xml');
	I.seeInTitle('XML Sitemap');

	I.amOnPage('https://brilliantcoding.com/category-sitemap.xml');
	I.seeInTitle('XML Sitemap');

	I.amOnPage('https://brilliantcoding.com/post_tag-sitemap.xml');
	I.seeInTitle('XML Sitemap');
});

Scenario('categories', (I) => {
	I.amOnPage('https://brilliantcoding.com/category/developer-tools/');
	I.seeInTitle('Developer Tools Archives – Brilliant Coding Blog');
	I.amOnPage('https://brilliantcoding.com/category/developer-tools/feed/');

	I.amOnPage('https://brilliantcoding.com/category/code-refactor/');
	I.seeInTitle('Code Refactor Archives – Brilliant Coding Blog');
	I.amOnPage('https://brilliantcoding.com/category/code-refactor/feed/');

	I.amOnPage('https://brilliantcoding.com/category/programming-languages/');
	I.seeInTitle('Programming Languages Archives – Brilliant Coding Blog');
	I.amOnPage('https://brilliantcoding.com/category/programming-languages/feed/');
});

Scenario('authors', (I) => {
	I.amOnPage('https://brilliantcoding.com/author/mjjacko/');
	I.seeInTitle('Matthew Jackowski, Author at Brilliant Coding Blog');
	I.amOnPage('https://brilliantcoding.com/author/mjjacko/feed/');
});


Scenario('tags', (I) => {
	I.amOnPage('https://brilliantcoding.com/tag/c/');
	I.seeInTitle('C Archives – Brilliant Coding Blog');
	I.amOnPage('https://brilliantcoding.com/tag/c/feed/');
	I.seeInTitle('C – Brilliant Coding Blog');

	I.amOnPage('https://brilliantcoding.com/tag/clojure/');
	I.seeInTitle('Clojure Archives – Brilliant Coding Blog');
	I.amOnPage('https://brilliantcoding.com/tag/clojure/feed/');
	I.seeInTitle('Clojure – Brilliant Coding Blog');

	I.amOnPage('https://brilliantcoding.com/tag/java/');
	I.seeInTitle('Java Archives – Brilliant Coding Blog');
	I.amOnPage('https://brilliantcoding.com/tag/java/feed/');
	I.seeInTitle('Java – Brilliant Coding Blog');

	I.amOnPage('https://brilliantcoding.com/tag/javascript/');
	I.seeInTitle('Javascript Archives – Brilliant Coding Blog');
	I.amOnPage('https://brilliantcoding.com/tag/javascript/feed/');
	I.seeInTitle('Javascript – Brilliant Coding Blog');

	I.amOnPage('https://brilliantcoding.com/tag/kotlin/');
	I.seeInTitle('Kotlin Archives – Brilliant Coding Blog');
	I.amOnPage('https://brilliantcoding.com/tag/kotlin/feed/');
	I.seeInTitle('Kotlin – Brilliant Coding Blog');

	I.amOnPage('https://brilliantcoding.com/tag/php/');
	I.seeInTitle('PHP Archives – Brilliant Coding Blog');
	I.amOnPage('https://brilliantcoding.com/tag/php/feed/');
	I.seeInTitle('PHP – Brilliant Coding Blog');

	I.amOnPage('https://brilliantcoding.com/tag/python/');
	I.seeInTitle('Python Archives – Brilliant Coding Blog');
	I.amOnPage('https://brilliantcoding.com/tag/python/feed/');
	I.seeInTitle('Python – Brilliant Coding Blog');

	I.amOnPage('https://brilliantcoding.com/tag/ruby/');
	I.seeInTitle('Ruby Archives – Brilliant Coding Blog');
	I.amOnPage('https://brilliantcoding.com/tag/ruby/feed/');
	I.seeInTitle('Ruby – Brilliant Coding Blog');

	I.amOnPage('https://brilliantcoding.com/tag/scala/');
	I.seeInTitle('Scala Archives – Brilliant Coding Blog');
	I.amOnPage('https://brilliantcoding.com/tag/scala/feed/');
	I.seeInTitle('Scala – Brilliant Coding Blog');
});