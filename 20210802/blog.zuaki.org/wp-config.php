<?php
//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL

/**
 * WordPress の基本設定
 *
 * このファイルは、インストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さずにこのファイルを "wp-config.php" という名前でコピーして
 * 直接編集して値を入力してもかまいません。
 *
 * このファイルは、以下の設定を含みます。
 *
 * * MySQL 設定
 * * 秘密鍵
 * * データベーステーブル接頭辞
 * * ABSPATH
 *
 * @link https://ja.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// 注意:
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.osdn.jp/%E7%94%A8%E8%AA%9E%E9%9B%86#.E3.83.86.E3.82.AD.E3.82.B9.E3.83.88.E3.82.A8.E3.83.87.E3.82.A3.E3.82.BF 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define( 'DB_NAME', 'zuaki_wp1' );

/** MySQL データベースのユーザー名 */
define( 'DB_USER', 'zuaki_wp1' );

/** MySQL データベースのパスワード */
define( 'DB_PASSWORD', '08mjkdj8q9' );

/** MySQL のホスト名 */
define( 'DB_HOST', 'mysql6.star.ne.jp' );

/** データベースのテーブルを作成する際のデータベースの文字セット */
define( 'DB_CHARSET', 'utf8' );

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define( 'DB_COLLATE', '' );

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '`65^c04ZxPQKNF147>X=t5u/n,4rD-[V5zXZ1B:/2uAJp8%Si?y<i1/fNn]_|WRX' );
define( 'SECURE_AUTH_KEY',  'UL/1Wy@^54N)e6N^b$~-Gi-}}xJ|}_P]SsVG#t`hYS>u(MN_#%Om@{<*MDU<Ca}F' );
define( 'LOGGED_IN_KEY',    '5Yox|H*f:@?{1|63l}ufw`2^bhW(M|9q^ma7KdAc`/N{~avo<NK#RV6kO1|BP(GY' );
define( 'NONCE_KEY',        'ls!U5%4#>fwYl{yu^%;QT.!d^taS_B]?,$@M D8TMiJmo~:N(;r%;zg_#%BR.]]I' );
define( 'AUTH_SALT',        'irCs%qZ6*tvS {D+KIO|$S}q2>^oKj>7#s(0+g:_Yq9OQJgrw86N>DtX2k. TEe0' );
define( 'SECURE_AUTH_SALT', 'Cc/_%PPm0=5QHc*hcdYAK{+gY5WPUU?//.n4 9>TTdPR[T?T@n<X1wxH-ts9( <q' );
define( 'LOGGED_IN_SALT',   '8Xs,&u-Vc>xZ0{{#6}r4YY.J7u;%T*--5f;a!p22TKh{WWeIY8aT-xQ+y2Y3L-i ' );
define( 'NONCE_SALT',       'Et*$Pq-OiZ>mb4TR~))W@`4]o9h+M:/Nj*u<nINsMIwO#veOG!)bw~6|_e;3tN[@' );
define( 'WP_CACHE_KEY_SALT','NB&-+V~=e~fG|q8YOw0?gw,]D`MQv2)#vF#ZRTR,kXs/E`HM]l(h3+Wb]oLnk$Rl' );

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix = 'wp_';

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 *
 * その他のデバッグに利用できる定数についてはドキュメンテーションをご覧ください。
 *
 * @link https://ja.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* 編集が必要なのはここまでです ! WordPress でのパブリッシングをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
