// eslint-disable-next-line strict
('use strict');

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import smoothToServices from './modules/smoothToServices';
import switchTabs from './modules/switchTabs';
import slider from './modules/slider';
import teamPhotoSwitcher from './modules/teamPhotoSwitcher';
import checkCalcInputs from './modules/checkCalcInputs';
import checkTextInputs from './modules/checkTextInputs';
import checkEmailInputs from './modules/checkEmailInputs';
import checkPhoneInputs from './modules/checkPhoneInputs';
import checkTextArea from './modules/checkTextArea';
import checkAllInputs from './modules/checkAllInputs';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';

// Timer
countTimer('13 may 2021');

// Toggle menu
toggleMenu();

// Toggle popup
togglePopup();

// Smooth scroll for the first screen button
smoothToServices();

// Tab switcher
switchTabs();

// Slider
slider();

// Team photo switcher
teamPhotoSwitcher();

// Check calc inputs
checkCalcInputs();

// Check text inputs
checkTextInputs();

// Check email inputs
checkEmailInputs();

// Check phone inputs
checkPhoneInputs();

// Check text area
checkTextArea();

// Check all inputs
checkAllInputs();

// Calculator
calculator(100);

// Send form
sendForm('form1');
sendForm('form2');
sendForm('form3');
