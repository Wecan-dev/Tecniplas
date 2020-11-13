<?php
/**
 * Template Name: Home page 6
 *
 **/
?>
    <!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="profile" href="http://gmpg.org/xfn/11">
        <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
        <?php wp_head(); ?>
    </head>
<body <?php body_class(); ?>>
<div class="wrapper-container homepage-v6">
<?php
echo '<div class="minicart-content woocommerce">
<div class="widget_shopping_cart_contents">
        <p class="close-cart">close</p>
        <div class="widget_shopping_cart_content">
         </div>
         </div>
        <div class="background-overlay-cart"></div>
    </div>';
?>
<?php if (is_active_sidebar('slider-before-header')) {
    dynamic_sidebar('slider-before-header');
}
?>
    <div class="container container-box-header1">
        <header id="masthead" class="site-header">
            <div class="affix-top header-hp-1 style-header-hp-1">
                <div id="js-navbar-fixed" class="menu-desktop">

                    <div class="menu-desktop-inner">
                        <!-- Logo -->
                        <?php
                        echo '<div class="menu-mobile-effect hamburger hamburger--spin"><div class="hamburger-box">
							<span class="hamburger-inner"></span>
						</div></div>';
                        do_action('azen_logo');
                        ?>
                        <div class="space-header"></div>
                        <!-- Main Menu -->
                        <nav class="main-menu">
                            <?php
                            get_template_part('inc/header/main-menu');
                            ?>
                        </nav>
                        <!-- Header Right -->
                        <?php if (is_active_sidebar('menu_right')) {
                            echo '<div class="header-right">';
                            dynamic_sidebar('menu_right');
                            echo '</div>';
                        }
                        ?>
                    </div>

                </div>
            </div>
        </header>
    </div>
    <div class="site page-content">
    <div class="home-content" role="main">
        <div class="container">
            <?php

            // Start the Loop.
            while (have_posts()) : the_post();
                the_content();
            endwhile;
            ?>
        </div>
    </div>
<?php get_footer();

