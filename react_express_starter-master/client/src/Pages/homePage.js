import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import '../css/style.css';

class homePage extends Component {

  onClick(type) {
    console.log(type);
  }

  render() {
    return (
      <div>
        <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Homepage</title>
        <link rel="stylesheet" type="css/text" href="../css/style.css"></link>
        {/* <!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> */}
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

        {/* <!-- Latest compiled and minified CSS --> */}
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
              integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>

        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
                integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        </Helmet>

        <div className="layout">
            <br></br>
            <br></br>
            <div className="pgs">
                <div className="layout-right">
                    <div className="right-up">
                        <div className="up">
                            <div className="corner">
                                <table className="table-four-left table-border">
                                    <tr className="table-border">
                                        <td className="table-border" onClick={this.onClick.bind(this,1)} style={{'background-color': 'red'}}>1</td>
                                        <td className="table-border">2</td>
                                    </tr>
                                    <tr className="table-border">
                                        <td className="table-border">3</td>
                                        <td className="table-border">4</td>
                                    </tr>
                                </table>
                                
                            </div>
                            <div className="corner">
                                <table className="table-four-left table-border">
                                    <tr className="table-border">
                                        <td className="table-border">5</td>
                                        <td className="table-border">6</td>
                                    </tr>
                                    <tr className="table-border">
                                        <td className="table-border">7</td>
                                        <td className="table-border">8</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="up">
                            <table className="table-six-vert table-border">
                                <tr className="table-border six-width">
                                    <td className="table-border">9</td>
                                    <td className="table-border">12</td>
                                </tr>
                                <tr className="table-border six-width">
                                    <td className="table-border">10</td>
                                    <td className="table-border">13</td>
                                </tr>
                                <tr className="table-border six-width">
                                    <td className="table-border">11</td>
                                    <td className="table-border">14</td>
                                </tr>
                            </table>
                        </div>
                        <div className="up">
                            <table className="table-six-vert table-border">
                                <tr className="table-border six-width">
                                    <td className="table-border">15</td>
                                    <td className="table-border">18</td>
                                </tr>
                                <tr className="table-border six-width">
                                    <td className="table-border">16</td>
                                    <td className="table-border">19</td>
                                </tr>
                                <tr className="table-border six-width">
                                    <td className="table-border">17</td>
                                    <td className="table-border">20</td>
                                </tr>
                            </table>
                        </div>
                        <div className="up">
                            <table className="table-six-vert table-border">
                                <tr className="table-border six-width">
                                    <td className="table-border">21</td>
                                    <td className="table-border">24</td>
                                </tr>
                                <tr className="table-border six-width">
                                    <td className="table-border">22</td>
                                    <td className="table-border">25</td>
                                </tr>
                                <tr className="table-border six-width">
                                    <td className="table-border">23</td>
                                    <td className="table-border">26</td>
                                </tr>
                            </table>
                        </div>
                        <div className="up">
                            <table className="table-six-vert table-border">
                                <tr className="table-border six-width">
                                    <td className="table-border">27</td>
                                    <td className="table-border">30</td>
                                </tr>
                                <tr className="table-border six-width">
                                    <td className="table-border">28</td>
                                    <td className="table-border">31</td>
                                </tr>
                                <tr className="table-border six-width">
                                    <td className="table-border">29</td>
                                    <td className="table-border">32</td>
                                </tr>
                            </table>
                        </div>
                        <div className="up">
                            <table className="table-six-vert table-border">
                                <tr className="table-border six-width">
                                    <td className="table-border">33</td>
                                    <td className="table-border">36</td>
                                </tr>
                                <tr className="table-border six-width">
                                    <td className="table-border">34</td>
                                    <td className="table-border">37</td>
                                </tr>
                                <tr className="table-border six-width">
                                    <td className="table-border">35</td>
                                    <td className="table-border">38</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="right-down">
                        <div className="down">
                            <div className="down-four">
                                <table className="table-six-heri-right table-border">
                                    <tr className="table-border six-width">
                                        <td className="table-border">39</td>
                                        <td className="table-border">40</td>
                                        <td className="table-border">41</td>
                                    </tr>
                                    <tr className="table-border six-width">
                                        <td className="table-border">42</td>
                                        <td className="table-border">43</td>
                                        <td className="table-border">44</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="down-four">
                                <table className="table-six-heri-right table-border">
                                    <tr className="table-border six-width">
                                        <td className="table-border">45</td>
                                        <td className="table-border">46</td>
                                        <td className="table-border">47</td>
                                    </tr>
                                    <tr className="table-border six-width">
                                        <td className="table-border">48</td>
                                        <td className="table-border">49</td>
                                        <td className="table-border">50</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="down-four">
                                <table className="table-six-heri-right table-border">
                                    <tr className="table-border six-width">
                                        <td className="table-border">51</td>
                                        <td className="table-border">52</td>
                                        <td className="table-border">53</td>
                                    </tr>
                                    <tr className="table-border six-width">
                                        <td className="table-border">54</td>
                                        <td className="table-border">55</td>
                                        <td className="table-border">56</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="down-four">
                                <table className="table-six-heri-right table-border">
                                    <tr className="table-border six-width">
                                        <td className="table-border">57</td>
                                        <td className="table-border">58</td>
                                        <td className="table-border">59</td>
                                    </tr>
                                    <tr className="table-border six-width">
                                        <td className="table-border">60</td>
                                        <td className="table-border">61</td>
                                        <td className="table-border">62</td>
                                    </tr>
                                </table>
                            </div>

                        </div>
                        <div className="down down-left-border">
                            <div className="down-four">
                                <table className="table-six-heri-left table-border">
                                    <tr className="table-border six-width">
                                        <td className="table-border">63</td>
                                        <td className="table-border">64</td>
                                        <td className="table-border">65</td>
                                    </tr>
                                    <tr className="table-border six-width">
                                        <td className="table-border">66</td>
                                        <td className="table-border">67</td>
                                        <td className="table-border">68</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="down-four">
                                <table className="table-six-heri-left table-border">
                                    <tr className="table-border six-width">
                                        <td className="table-border">69</td>
                                        <td className="table-border">70</td>
                                        <td className="table-border">71</td>
                                    </tr>
                                    <tr className="table-border six-width">
                                        <td className="table-border">72</td>
                                        <td className="table-border">73</td>
                                        <td className="table-border">74</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="down-four">
                                <table className="table-six-heri-left table-border">
                                    <tr className="table-border six-width">
                                        <td className="table-border">75</td>
                                        <td className="table-border">76</td>
                                        <td className="table-border">77</td>
                                    </tr>
                                    <tr className="table-border six-width">
                                        <td className="table-border">78</td>
                                        <td className="table-border">79</td>
                                        <td className="table-border">80</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="down-four">
                                <table className="table-six-heri-left table-border">
                                    <tr className="table-border six-width">
                                        <td className="table-border">81</td>
                                        <td className="table-border">82</td>
                                        <td className="table-border">83</td>
                                    </tr>
                                    <tr className="table-border six-width">
                                        <td className="table-border">84</td>
                                        <td className="table-border">85</td>
                                        <td className="table-border">86</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="down">
                            <div className="down-space bg-dark"></div>
                            <div className="down-three">
                                <table className="table-linefour table-border">
                                    <tr className="table-border six-width">
                                        <td className="table-border">87</td>
                                        <td className="table-border">88</td>
                                        <td className="table-border">89</td>
                                        <td className="table-border">90</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="down-three">
                                <table className="table-eight table-border">
                                    <tr className="table-border six-width">
                                        <td className="table-border">91</td>
                                        <td className="table-border">92</td>
                                        <td className="table-border">93</td>
                                        <td className="table-border">94</td>
                                    </tr>
                                    <tr className="table-border six-width">
                                        <td className="table-border">95</td>
                                        <td className="table-border">96</td>
                                        <td className="table-border">97</td>
                                        <td className="table-border">98</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="down-three">
                                <table className="table-linefour table-border">
                                    <tr className="table-border six-width">
                                        <td className="table-border">99</td>
                                        <td className="table-border">100</td>
                                        <td className="table-border">101</td>
                                        <td className="table-border">102</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="down down-left-border">
                            <div className="down-four">
                                <table className="table-six-heri-right table-border">
                                    <tr className="table-border six-width">
                                        <td className="table-border">103</td>
                                        <td className="table-border">104</td>
                                        <td className="table-border">105</td>
                                    </tr>
                                    <tr className="table-border six-width">
                                        <td className="table-border">106</td>
                                        <td className="table-border">107</td>
                                        <td className="table-border">108</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="down-four">
                                <table className="table-six-heri-right table-border">
                                    <tr className="table-border six-width">
                                        <td className="table-border">109</td>
                                        <td className="table-border">110</td>
                                        <td className="table-border">111</td>
                                    </tr>
                                    <tr className="table-border six-width">
                                        <td className="table-border">112</td>
                                        <td className="table-border">113</td>
                                        <td className="table-border">114</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="down-four">
                                <table className="table-eight table-border">
                                    <tr className="table-border six-width">
                                        <td className="table-border">c1</td>
                                        <td className="table-border">c2</td>
                                        <td className="table-border">c3</td>
                                        <td className="table-border">c4</td>
                                    </tr>
                                    <tr className="table-border six-width">
                                        <td className="table-border">c5</td>
                                        <td className="table-border">c6</td>
                                        <td className="table-border">c7</td>
                                        <td className="table-border">c8</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="down-four">
                                <table className="table-eight table-border">
                                    <tr className="table-border six-width">
                                        <td className="table-border">c9</td>
                                        <td className="table-border">c10</td>
                                        <td className="table-border">c11</td>
                                        <td className="table-border">c12</td>
                                    </tr>
                                    <tr className="table-border six-width">
                                        <td className="table-border">c13</td>
                                        <td className="table-border">c14</td>
                                        <td className="table-border">c15</td>
                                        <td className="table-border">c16</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="layout-left">
                    <div className="left-up">
                        <div className="up-two">
                            <div className="up-four">
                                <table className="table-four-left table-border">
                                    <tr className="table-border">
                                        <td className="table-border">115</td>
                                        <td className="table-border">116</td>
                                    </tr>
                                    <tr className="table-border">
                                        <td className="table-border">117</td>
                                        <td className="table-border">118</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="up-four">
                                <table className="table-four-left table-border">
                                    <tr className="table-border">
                                        <td className="table-border">119</td>
                                        <td className="table-border">120</td>
                                    </tr>
                                    <tr className="table-border">
                                        <td className="table-border">121</td>
                                        <td className="table-border">122</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="up-four">
                                <table className="table-four-left table-border">
                                    <tr className="table-border">
                                        <td className="table-border">123</td>
                                        <td className="table-border">124</td>
                                    </tr>
                                    <tr className="table-border">
                                        <td className="table-border">125</td>
                                        <td className="table-border">126</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="up-four">
                                <table className="table-four-left table-border">
                                    <tr className="table-border">
                                        <td className="table-border">127</td>
                                        <td className="table-border">128</td>
                                    </tr>
                                    <tr className="table-border">
                                        <td className="table-border">129</td>
                                        <td className="table-border">130</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="up-two">
                            <div className="up-four">
                                <table className="table-four-right table-border">
                                    <tr className="table-border">
                                        <td className="table-border">131</td>
                                        <td className="table-border">132</td>
                                    </tr>
                                    <tr className="table-border">
                                        <td className="table-border">133</td>
                                        <td className="table-border">134</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="up-four">
                                <table className="table-four-right table-border">
                                    <tr className="table-border">
                                        <td className="table-border">135</td>
                                        <td className="table-border">136</td>
                                    </tr>
                                    <tr className="table-border">
                                        <td className="table-border">137</td>
                                        <td className="table-border">138</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="up-four">
                                <table className="table-four-right table-border">
                                    <tr className="table-border">
                                        <td className="table-border">139</td>
                                        <td className="table-border">140</td>
                                    </tr>
                                    <tr className="table-border">
                                        <td className="table-border">141</td>
                                        <td className="table-border">142</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="up-four">
                                <table className="table-four-right table-border">
                                    <tr className="table-border">
                                        <td className="table-border">143</td>
                                        <td className="table-border">144</td>
                                    </tr>
                                    <tr className="table-border">
                                        <td className="table-border">145</td>
                                        <td className="table-border">146</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="left-down bg-dark"></div>
                </div>
            </div>
            <div className="label">
                <p className="p-red">Red -- <strong>OCCUPIED</strong></p>
                <p className="p-green">Green -- <strong>FREE</strong></p>
            </div>
        </div>
      </div>
    )
  }
}

export default homePage
