/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';

import { Tooltip, Toast, Popover } from 'bootstrap';
import $ from 'jquery';
import 'select2';                       
$(document).ready(() => $('.select2').select2()) 
import 'select2/dist/css/select2.min.css';
require('@fortawesome/fontawesome-free/css/all.css');


