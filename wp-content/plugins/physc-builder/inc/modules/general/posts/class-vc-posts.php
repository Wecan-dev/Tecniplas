<?php
/**
 * PhyscBuilders Visual Composer Posts shortcode
 *
 * @version     1.0.0
 * @author      Physcodes
 * @package     PhyscBuilders/Classes
 * @category    Classes
 * @author      Physcodes
 */

/**
 * Prevent loading this file directly
 */
defined( 'ABSPATH' ) || exit;

if ( !class_exists( 'PhyscBuilder_VC_Posts' ) ) {
	/**
	 * Class PhyscBuilder_VC_Posts
	 */
	class PhyscBuilder_VC_Posts extends PhyscBuilder_VC_Shortcode {
		protected $config_class = 'PhyscBuilder_Config_Posts';
	}
}

new PhyscBuilder_VC_Posts();