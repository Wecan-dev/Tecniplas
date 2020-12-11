<?php
 function azen_child_enqueue_styles() {
	wp_deregister_style( 'azen-style' );
	$parent_style = 'parent-style'; 
	wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css', array() ,  filemtime( get_template_directory() . '/style.css' ));
	wp_enqueue_style( 'child-style', get_stylesheet_uri(), array( $parent_style ) ,'1.0.1');
	wp_deregister_style( 'azen-options' );
	if ( is_file( AZEN_UPLOADS_FOLDER . AZEN_FILE_NAME ) ) {
		wp_enqueue_style( 'azen-options-child', AZEN_UPLOADS_URL . AZEN_FILE_NAME, array(), filemtime( AZEN_UPLOADS_FOLDER . AZEN_FILE_NAME ) );
	}else{
		wp_enqueue_style( 'azen-options-child', get_template_directory_uri() . '/assets/css/azen-options.css', array(),  filemtime( get_template_directory() . '/assets/css/azen-options.css' ) );
	}
}

add_action( 'wp_enqueue_scripts', 'azen_child_enqueue_styles', 11 );

//catalogo

remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_add_to_cart', 10 );

remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30 );

remove_action( 'woocommerce_simple_add_to_cart', 'woocommerce_simple_add_to_cart', 30 );

remove_action( 'woocommerce_grouped_add_to_cart', 'woocommerce_grouped_add_to_cart', 30 );

add_filter( 'woocommerce_get_price_html', 'ocultar_precios' );
function ocultar_precios( $price ) {
    return '';
}

//traducir
add_filter('gettext',  'translate_text');
add_filter('ngettext',  'translate_text');

function translate_text($translated) {
	     $translated = str_ireplace('Quantity',  'Cantidad',  $translated);

     $translated = str_ireplace('Home',  'Inicio',  $translated);
     $translated = str_ireplace('close',  'Cerrar',  $translated);

     $translated = str_ireplace('view cart',  'ver carrito',  $translated);
     $translated = str_ireplace('Search here',  'Buscar',  $translated);
     $translated = str_ireplace('Back to inicio',  'Volver al inicio',  $translated);
     $translated = str_ireplace('Product added!',  '¡Producto Agregado!',  $translated);
     $translated = str_ireplace('Browse the list',  'Ver lista',  $translated);
     $translated = str_ireplace('update list',  'Actualizar lista',  $translated);
     $translated = str_ireplace('Send the request',  'Enviar cotización',  $translated);
     $translated = str_ireplace('Name',  'Nombre',  $translated);
     $translated = str_ireplace('Send your Request',  'Enviar cotización',  $translated);
     $translated = str_ireplace('Send the request',  'Enviar cotización',  $translated);
     $translated = str_ireplace('Message',  'Mensaje',  $translated);
     $translated = str_ireplace('Notes on your request',  'Nota de tu cotización',  $translated);
     $translated = str_ireplace('Quantity',  'Cantidad',  $translated);
     $translated = str_ireplace('There was a problem in sending your request. Please try again.',  'No se pudo enviar cotización. Por favor intente nuevamente',  $translated);
     $translated = str_ireplace('The product is already in quote request list!',  'El Producto ha sido agregado a la lista de cotización',  $translated);
     return $translated;
}
?>