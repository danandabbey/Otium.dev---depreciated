import { CSSProperties } from "react";

interface theme{
    main_color: string
    background_color: string
}

const bodyStyle = document.body.style
bodyStyle.border = '0px';
bodyStyle.margin = '0px';

const root: any = document.getElementById('root')
const rootStyle = root.style
rootStyle.width = '100vw'
rootStyle.height = '100vh'

const themes: theme[] = [
    {
        main_color: '#90a9b7',
        background_color: '#272727',
    },
    {
        main_color: '#ffffff',
        background_color: '#3b413c',
    },
    {
        main_color: '#bfc0c0',
        background_color: '#2d3142',
    },
    {
        main_color: '#deb841',
        background_color: '#37323e',
    },
    {
        main_color: '#b4b8ab',
        background_color: '#153243',
    },
    {
        main_color: '#d64933',
        background_color: '#2b303a',
    },
    {
        main_color: '#e08dac',
        background_color: '#153131',
    },
        {
        main_color: '#fcffeb',
        background_color: '#474350',
    },
    {
        main_color: '#ff715b',
        background_color: '#4c5b5c',
    },
        {
        main_color: '#f1e0c5',
        background_color: '#342a21',
    },
    {
        main_color: '#e4d6a7',
        background_color: '#1c110a',
    },
];

const { main_color, background_color } = themes[Math.floor(Math.random() * themes.length)];

const mobile: boolean = window.innerWidth <= 900;

const styles: { [key: string]: CSSProperties } = {

    /************************************* Global *************************************/

    app: {
        'backgroundColor': background_color,
        'fontSize': mobile ? '1.2em' : '1.3em',
        'letterSpacing': '.1px',
        'overflowX': 'hidden',
        'width': '100%',
        'height': '100%',

    },
    loading: {
        'justifyContent': 'center',
        'textAlign': 'center',
        'width': '100%',
        'height': '100%',
    },
    index: {
        'justifyContent': 'center',
        'textAlign': 'center',
        'width': '100%',
        'height': '100%',
    },
    menu: {
        'display': 'flex',
        'flexDirection': 'column',
        'position': 'fixed',
        'justifyContent': 'center',
        'textAlign': 'center',
        'alignItems' : 'center',
        'right': '0',
        'bottom': '0',
        'borderRadius': '5px',
        'backgroundColor': background_color,
        'width': mobile ? '100%' : '30%',
        'height': mobile ? '100%' : '30%',
        'padding': '1em',
        'zIndex': '1000',
        'margin' : 'auto'
    },

    /************************************* Index *************************************/

    title: {
        'fontSize': mobile ? '6em' : '8em',
        'color':main_color,
    }, 

    /************************************* Menu *************************************/
    
    menuItem: {
        'color': main_color,
        'fontSize': mobile ? '1em' : '2em',
        'width': '100%',
        'height': '50%',
    },
    
    /************************************* Loading *************************************/
    
    loadingDot: {
        'color': main_color,
        'justifyContent': 'center',
        'textAlign': 'center',
        'fontSize': mobile ? '4em' : '5em',
    },
    
    /************************************* Weather *************************************/

    weatherApp: {
        'fontSize': mobile ? '1.2em' : '1.3em',
        'width': '100%',
        'height': '100%',
    },

    /* Current */

    currentTitle: {
        'fontSize': '2em',
        'color':main_color

    },
    current: {
        'color': main_color,
        'gap': '.2em',
        'padding': '2em',
        'display': 'flex',
        'flexDirection': 'column',
        'justifySelf': 'center',
        'alignItems': 'center',
        'textAlign': 'center'
    },

    /* Chart */

    chart: {
        'color': main_color,
        'borderTop': `solid ${main_color} .1em`,
        'borderBottom': `solid ${main_color} .1em`,
        'paddingLeft': '.5em',
    },
    chartCon: {
        'color': main_color,
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center'
    },
    chartBtn: {
        'color': main_color,
        'border': `1px ${main_color} solid`,
        'borderRadius': '5px',
        'fontSize': '1em',
        'padding': '.3em',
    },
    chartBtnCon: {
        'gap': mobile ? '1em' : '2em',
        'paddingTop': '1em',
        'paddingBottom': '1em',
        'display': 'flex',
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'justifyContent': 'center',
    },
    chart_and_buttons: {
        'width' : '70%',
        'display': 'flex',
        'flexDirection': 'column'
    },

    /* Twelve-Hour */

    twelveHour: {
        'color': main_color,
        'alignItems': 'center',
        'justifyContent': 'center',
        'display': 'flex',
        'flexWrap': 'wrap',
    },
    forecast: {
        'color': main_color,
        'padding': mobile ? '1.5em' : '2em',
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
        'textAlign': 'center',
    },
    forecast_name: {
        'fontSize': mobile ? '1.6em' : '1.5em',
        'margin': '.5em',
    },
    forecast_precipitation: {
        'margin': '.5em',
    },
    forecast_temp: {
        'margin': '.5em',
    },
};

export default styles;