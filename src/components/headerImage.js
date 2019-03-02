import styled from '@emotion/styled'
import React from 'react'

import config from '../config'

const gradient = `linear-gradient(
  ${config.heroGradient}, ${config.heroGradient}
  )`

const Hero = styled.div`
  height: 300px;
  display: flex;
  margin: 10px 0;
  transition: 200ms;
  filter: sepia(20%) brightness(80%);
  background: ${gradient}, url("${props =>
  props.image
    ? props.image
    : 'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/amg-gts-grau/DSC01437.jpg'}") center 50% no-repeat;
  background-size: cover;
  padding: 10px;
  box-shadow: 0px 4px 6px -3px rgba(0, 0, 0, 0.3);

  @media (max-width: ${config.mobileMQ}) {
    margin: 0;
    height: 250px;
  }
`
const GLOSSBOSSsvg = styled.svg`
  margin: 0 auto;
  position: relative;
  top: 25%;
`

export default ({ image, title, subTitle }) => (
  <Hero image={image}>
    <GLOSSBOSSsvg
      width="477px"
      height="106px"
      viewBox="0 0 477 106"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="GLOSSBOSS_ARTBOARD"
          transform="translate(-24.000000, -57.000000)"
          fill="#fff"
        >
          <path
            d="M106.763,68.453 C104.817,67.202 99.674,64.839 92.724,64.839 C84.245,64.839 73.403,68.314 62.7,81.241 C54.082,91.666 47.827,105.566 45.325,118.771 C37.541,119.605 31.564,120.578 30.174,121.551 C26.699,123.914 24.475,128.362 24.475,132.671 C24.475,134.756 24.892,136.563 26.004,138.231 L30.452,134.756 C30.452,134.756 35.873,133.644 43.935,132.532 C44.352,148.1 51.441,160.193 67.982,160.193 C71.318,160.193 74.654,157.969 79.38,153.938 C78.963,155.467 78.824,156.857 78.824,157.969 C78.824,161.583 82.855,162.139 83.828,162.139 C85.218,162.139 86.052,161.444 86.052,161.444 C88.554,144.486 98.979,129.891 98.979,129.891 C98.979,129.891 98.84,129.891 98.84,129.752 C99.257,128.918 99.813,127.667 99.813,125.86 C99.813,124.609 99.535,123.219 98.979,121.551 C97.867,118.354 86.747,117.242 73.681,117.242 C69.372,117.242 64.924,117.381 60.476,117.52 C65.897,96.114 86.886,77.071 98.006,77.071 C99.813,77.071 101.342,77.488 102.593,78.6 C102.593,78.6 97.172,86.523 97.172,92.639 C97.172,95.558 98.145,99.033 104.261,99.033 C105.234,99.033 106.068,98.755 106.485,98.06 C108.014,95.002 113.852,87.079 113.852,81.936 C113.852,75.959 107.319,69.009 106.763,68.453 L106.763,68.453 Z M88.693,130.586 C87.442,132.671 86.052,135.59 84.662,138.787 C80.075,144.069 74.515,148.517 69.928,148.517 C63.395,148.517 59.92,137.814 59.225,130.864 C64.646,130.447 70.484,130.169 76.322,130.169 C80.492,130.169 84.662,130.308 88.693,130.586 L88.693,130.586 Z M290.859079,120.822787 C287.98264,122.751009 282.323509,127.355653 272.483909,138.231 C273.734909,132.115 274.151909,125.721 274.151909,120.3 C274.151909,117.659 274.012909,115.018 274.012909,112.933 C274.012909,104.315 281.935909,105.01 281.935909,99.867 C281.935909,95.697 277.209909,92.361 270.676909,92.361 C267.757909,92.361 264.282909,94.724 262.058909,99.728 C239.589707,110.449818 230.565631,116.919225 227.059039,120.017069 C225.028541,121.126456 219.253014,125.072971 207.096606,138.509 C208.347606,132.393 208.764606,125.999 208.764606,120.578 C208.764606,117.937 208.625606,115.296 208.625606,113.211 C208.625606,104.593 216.548606,105.288 216.548606,100.145 C216.548606,95.836 211.822606,92.639 205.289606,92.639 C202.231606,92.639 198.339606,95.28 196.254606,101.118 C188.192606,110.014 173.597606,125.721 167.064606,127.945 C170.817606,122.246 173.458606,117.659 174.014606,116.686 L175.821606,113.767 C179.296606,108.902 180.686606,105.149 180.686606,102.23 C180.686606,95.002 172.763606,93.056 172.068606,92.917 C170.956606,92.639 169.705606,92.5 168.593606,92.5 C159.139465,92.5 148.964095,101.772945 138.511028,119.076945 C132.719339,124.69883 123.963333,134.384134 111.268303,151.019 C113.770303,143.096 120.720303,125.582 132.257303,109.597 L140.180303,97.226 C147.269303,84.716 147.130303,86.106 153.385303,76.515 L153.524303,76.237 C157.555303,70.26 162.142303,63.171 162.142303,63.171 C159.779303,59.14 157.138303,57.75 154.497303,57.75 C152.134303,57.75 149.771303,58.862 148.103303,60.113 C141.709303,62.476 113.353303,110.014 113.353303,110.014 C103.901303,125.721 96.3953032,143.235 96.3953032,147.544 C96.3953032,153.243 101.121303,159.498 106.542303,161.444 C106.681303,162 106.959303,162.139 107.515303,162.139 C107.793303,162.139 108.071303,162.139 108.488303,162 C109.183303,162.139 109.739303,162.139 110.434303,162.139 L110.434303,161.027 C114.57354,158.137344 120.380245,148.577815 128.495446,138.931277 C126.686117,143.910959 125.920606,148.012252 125.920606,151.297 C125.920606,158.664 129.951606,162 135.372606,162 C142.739606,162 146.492606,158.108 159.419606,139.76 C161.087606,138.787 162.755606,137.814 164.423606,136.841 C165.396606,148.517 174.153606,162.139 184.578606,162.139 C193.335606,162.139 198.895606,157.691 202.648606,151.436 C208.950129,143.627592 217.951817,131.768935 230.185894,126.238369 L230.783909,126.694 C238.567909,116.825 250.660909,110.848 260.112909,106.539 C259.973909,107.929 259.834909,109.458 259.695909,111.126 C258.861909,145.876 252.328909,151.019 247.463909,151.019 C243.571909,151.019 238.706909,144.764 238.706909,138.092 C238.706909,135.451 239.540909,132.671 241.347909,130.308 C241.347909,130.169 241.486909,130.169 241.486909,130.03 C241.486909,129.057 237.455909,127.528 234.258909,127.528 C229.949909,127.528 229.810909,131.42 229.810909,134.756 C229.810909,146.71 239.123909,161.861 249.965909,161.861 C258.722909,161.861 264.282909,157.413 268.035909,151.158 C272.383603,145.770641 278.016634,138.519541 285.109801,132.725842 C281.995909,139.786903 280.047213,145.457749 280.047213,147.266 C280.047213,155.745 288.109213,162 295.754213,162 C301.453213,162 309.654213,157.135 319.801213,144.069 C332.867213,127.389 339.956213,113.767 339.956213,103.62 C339.956213,99.728 338.844213,96.392 336.759213,93.612 C336.064213,93.056 333.701213,89.859 328.836213,88.608 C333.006213,82.214 332.033213,84.16 337.037213,76.376 L337.176213,76.098 C341.207213,70.26 345.794213,63.032 345.794213,63.032 C343.431213,59.14 340.790213,57.75 338.149213,57.75 C335.786213,57.75 333.423213,58.862 331.755213,60.113 C325.500213,62.476 297.144213,109.875 297.144213,109.875 C294.935334,113.369644 292.812469,117.106694 290.859079,120.822787 Z M139.264606,153.243 C138.986606,152.965 138.708606,152.409 138.708606,151.714 C138.708606,150.741 139.125606,149.351 139.820606,147.544 L140.376606,147.544 C142.739606,147.544 146.770606,146.154 148.160606,145.459 C144.546606,150.324 141.488606,153.521 139.820606,153.521 C139.681606,153.521 139.403606,153.382 139.264606,153.243 L139.264606,153.243 Z M155.666606,134.756 C150.106606,137.536 145.241606,139.899 142.183606,141.845 C143.712606,138.787 145.519606,134.895 147.743606,130.169 C154.415606,115.991 168.732606,101.674 169.566606,101.396 C170.122606,101.396 172.068606,100.979 173.458606,100.84 C173.180606,106.261 165.813606,119.188 155.666606,134.756 L155.666606,134.756 Z M182.215606,151.297 C178.323606,151.297 173.319606,145.181 173.319606,138.37 C173.319606,135.729 174.153606,132.949 175.960606,130.586 C176.099606,130.447 176.099606,130.447 176.099606,130.308 C176.099606,130.169 175.960606,129.891 175.682606,129.613 C183.049606,124.609 189.304606,119.466 194.308606,115.018 C193.057606,146.154 186.802606,151.158 182.215606,151.297 L182.215606,151.297 Z M329.670213,99.45 C330.087213,100.006 322.303213,119.466 311.878213,131.698 C303.399213,141.567 298.534213,147.683 295.615213,148.934 C298.673213,140.316 305.206213,124.331 316.048213,109.458 L316.326213,108.902 C321.747213,101.535 323.415213,98.199 328.697213,95.558 C329.114213,96.948 329.531213,98.755 329.670213,99.45 L329.670213,99.45 Z M343.210516,153.243 C342.932516,152.965 342.654516,152.409 342.654516,151.714 C342.654516,150.741 343.071516,149.351 343.766516,147.544 L344.322516,147.544 C346.685516,147.544 350.716516,146.154 352.106516,145.459 C348.492516,150.324 345.434516,153.521 343.766516,153.521 C343.627516,153.521 343.349516,153.382 343.210516,153.243 Z M359.612516,134.756 C354.052516,137.536 349.187516,139.899 346.129516,141.845 C347.658516,138.787 349.465516,134.895 351.689516,130.169 C358.361516,115.991 372.678516,101.674 373.512516,101.396 C374.068516,101.396 376.014516,100.979 377.404516,100.84 C377.126516,106.261 369.759516,119.188 359.612516,134.756 Z M386.161516,151.297 C382.269516,151.297 377.265516,145.181 377.265516,138.37 C377.265516,135.729 378.099516,132.949 379.906516,130.586 C380.045516,130.447 380.045516,130.447 380.045516,130.308 C380.045516,130.169 379.906516,129.891 379.628516,129.613 C386.995516,124.609 393.250516,119.466 398.254516,115.018 C397.003516,146.154 390.748516,151.158 386.161516,151.297 Z M431.004949,120.017069 C428.974451,121.126456 423.198923,125.072971 411.042516,138.509 C412.293516,132.393 412.710516,125.999 412.710516,120.578 C412.710516,117.937 412.571516,115.296 412.571516,113.211 C412.571516,104.593 420.494516,105.288 420.494516,100.145 C420.494516,95.836 415.768516,92.639 409.235516,92.639 C406.177516,92.639 402.285516,95.28 400.200516,101.118 C392.138516,110.014 377.543516,125.721 371.010516,127.945 C374.763516,122.246 377.404516,117.659 377.960516,116.686 L379.767516,113.767 C383.242516,108.902 384.632516,105.149 384.632516,102.23 C384.632516,95.002 376.709516,93.056 376.014516,92.917 C374.902516,92.639 373.651516,92.5 372.539516,92.5 C361.558516,92.5 349.604516,105.01 337.372516,128.084 C331.951516,138.231 329.866516,145.876 329.866516,151.297 C329.866516,158.664 333.897516,162 339.318516,162 C346.685516,162 350.438516,158.108 363.365516,139.76 C365.033516,138.787 366.701516,137.814 368.369516,136.841 C369.342516,148.517 378.099516,162.139 388.524516,162.139 C397.281516,162.139 402.841516,157.691 406.594516,151.436 C412.896038,143.627592 421.897726,131.768935 434.131804,126.238369 L434.729819,126.694 C442.513819,116.825 454.606819,110.848 464.058819,106.539 C463.919819,107.929 463.780819,109.458 463.641819,111.126 C462.807819,145.876 456.274819,151.019 451.409819,151.019 C447.517819,151.019 442.652819,144.764 442.652819,138.092 C442.652819,135.451 443.486819,132.671 445.293819,130.308 C445.293819,130.169 445.432819,130.169 445.432819,130.03 C445.432819,129.057 441.401819,127.528 438.204819,127.528 C433.895819,127.528 433.756819,131.42 433.756819,134.756 C433.756819,146.71 443.069819,161.861 453.911819,161.861 C462.668819,161.861 468.228819,157.413 471.981819,151.158 C478.375819,143.235 487.549819,131.281 500.059819,125.86 L497.279819,119.466 C497.279819,119.466 492.275819,120.717 476.429819,138.231 C477.680819,132.115 478.097819,125.721 478.097819,120.3 C478.097819,117.659 477.958819,115.018 477.958819,112.933 C477.958819,104.315 485.881819,105.01 485.881819,99.867 C485.881819,95.697 481.155819,92.361 474.622819,92.361 C471.703819,92.361 468.228819,94.724 466.004819,99.728 C443.535617,110.449818 434.511541,116.919225 431.004949,120.017069 Z"
            id="GLOSSBOSS"
          />
        </g>
      </g>
    </GLOSSBOSSsvg>
  </Hero>
)
