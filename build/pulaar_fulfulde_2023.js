if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_pulaar_fulfulde_2023());
}
function Keyboard_pulaar_fulfulde_2023()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;
  this.KI="Keyboard_pulaar_fulfulde_2023";
  this.KN="Tappirde Pulaar Fulfulde 2023";
  this.KMINVER="15.0";
  this.KV={F:' 1em "Arial"',K102:0};
  this.KV.KLS={

  };
  this.KV.BK=(function(x){
    var
      empty=Array.apply(null, Array(65)).map(String.prototype.valueOf,""),
      result=[], v, i,
      modifiers=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];
    for(i=modifiers.length-1;i>=0;i--) {
      v = x[modifiers[i]];
      if(v || result.length > 0) {
        result=(v ? v : empty).slice().concat(result);
      }
    }
    return result;
  })(this.KV.KLS);
  this.KDU=1;
  this.KH='';
  this.KM=0;
  this.KBVER="1.0";
  this.KMBM=modCodes.SHIFT | modCodes.ALT | modCodes.CAPS | modCodes.NO_CAPS /* 0x0350 */;
  this.KVKL={
  "phone": {
    "font": "Sawarabi Gothic",
    "fontsize": "1.3em",
    "displayUnderlying": true,
    "layer": [
      {
        "id": "shift",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_0041",
                "text": "A",
                "sk": [
                  {
                    "nextlayer": "default",
                    "layer": "shift",
                    "id": "U_00C0",
                    "text": "\u00C0"
                  },
                  {
                    "nextlayer": "default",
                    "layer": "shift",
                    "id": "U_00C6",
                    "text": "\u00C6"
                  },
                  {
                    "nextlayer": "default",
                    "id": "U_00C2",
                    "text": "\u00C2"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_018A",
                "text": "\u018A",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_005A",
                    "text": "Z"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_0045",
                "text": "E",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_00C9",
                    "text": "\u00C9"
                  },
                  {
                    "nextlayer": "default",
                    "id": "U_00C8",
                    "text": "\u00C8"
                  },
                  {
                    "nextlayer": "default",
                    "id": "U_00CA",
                    "text": "\u00CA"
                  },
                  {
                    "nextlayer": "default",
                    "id": "U_00CB",
                    "text": "\u00CB"
                  },
                  {
                    "nextlayer": "default",
                    "id": "U_20AC",
                    "text": "\u20AC"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_0052",
                "text": "R",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_00AE",
                    "text": "\u00AE"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_0054",
                "text": "T"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "K_Y",
                "text": "Y"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_0055",
                "text": "U"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_0049",
                "text": "I"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_004F",
                "text": "O",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_00D3",
                    "text": "\u00D3"
                  },
                  {
                    "nextlayer": "default",
                    "id": "U_00D6",
                    "text": "\u00D6"
                  },
                  {
                    "nextlayer": "default",
                    "id": "U_0152",
                    "text": "\u0152"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_0050",
                "text": "P"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_014A",
                "text": "\u014A",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_0051",
                    "text": "Q"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_0053",
                "text": "S",
                "sk": [
                  {
                    "id": "U_0024",
                    "text": "$"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_0044",
                "text": "D"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_0046",
                "text": "F"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_0047",
                "text": "G",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_01E6",
                    "text": "\u01E6"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_0048",
                "text": "H"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_004A",
                "text": "J"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_004B",
                "text": "K"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_004C",
                "text": "L"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_004D",
                "text": "M"
              },
              {
                "width": "10",
                "id": "T_new_760",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "default",
                "id": "K_SHIFT",
                "sp": "2",
                "text": "*Shift*"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_0057",
                "text": "W"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_01B3",
                "text": "\u01B3",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_0058",
                    "text": "X"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_0043",
                "text": "C",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_00A9",
                    "text": "\u00A9"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_0181",
                "text": "\u0181",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_0056",
                    "text": "V"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_0042",
                "text": "B"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_004E",
                "text": "N",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_00D1",
                    "text": "\u00D1"
                  },
                  {
                    "nextlayer": "shift",
                    "id": "U_019D",
                    "text": "\u019D"
                  }
                ]
              },
              {
                "nextlayer": "shift",
                "id": "U_002E",
                "text": ".",
                "sk": [
                  {
                    "id": "U_002D",
                    "text": "-"
                  },
                  {
                    "id": "U_005F",
                    "text": "_"
                  }
                ]
              },
              {
                "nextlayer": "shift",
                "id": "U_003F",
                "text": "?",
                "sk": [
                  {
                    "id": "U_0027",
                    "text": "'"
                  },
                  {
                    "nextlayer": "shift",
                    "id": "U_0021",
                    "text": "!"
                  },
                  {
                    "id": "U_0022",
                    "text": "\""
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "caps",
                "id": "K_CAPS",
                "sp": "1",
                "text": "\u21EA"
              },
              {
                "nextlayer": "numeric",
                "width": "110",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "110",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "nextlayer": "shift",
                "width": "410",
                "id": "K_SPACE"
              },
              {
                "layer": "default",
                "id": "U_002C",
                "text": ",",
                "sk": [
                  {
                    "id": "K_COLON",
                    "text": ":"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  }
                ]
              },
              {
                "nextlayer": "shift",
                "id": "U_1F54C",
                "text": "\uD83D\uDD4C",
                "sk": [
                  {
                    "nextlayer": "shift",
                    "id": "U_1F4FF",
                    "text": "\uD83D\uDCFF"
                  },
                  {
                    "nextlayer": "shift",
                    "id": "U_FDFA",
                    "text": "\uFDFA"
                  },
                  {
                    "nextlayer": "shift",
                    "id": "U_FDF4",
                    "text": "\uFDF4"
                  },
                  {
                    "nextlayer": "shift",
                    "id": "U_FDF2",
                    "text": "\uFDF2"
                  },
                  {
                    "nextlayer": "shift",
                    "id": "U_FDFD",
                    "text": "\uFDFD"
                  }
                ]
              },
              {
                "nextlayer": "shift",
                "width": "120",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "layer": "default",
                "id": "U_0061",
                "text": "a",
                "sk": [
                  {
                    "id": "U_0040",
                    "text": "@"
                  },
                  {
                    "id": "U_00E0",
                    "text": "\u00E0"
                  },
                  {
                    "id": "U_00E6",
                    "text": "\u00E6"
                  },
                  {
                    "id": "U_00E2",
                    "text": "\u00E2"
                  }
                ]
              },
              {
                "id": "U_0257",
                "text": "\u0257",
                "sk": [
                  {
                    "layer": "default",
                    "id": "U_007A",
                    "text": "z"
                  }
                ]
              },
              {
                "id": "U_0065",
                "text": "e",
                "sk": [
                  {
                    "id": "U_00E9",
                    "text": "\u00E9"
                  },
                  {
                    "id": "U_00E8",
                    "text": "\u00E8"
                  },
                  {
                    "id": "U_00EA",
                    "text": "\u00EA"
                  },
                  {
                    "id": "U_00EB",
                    "text": "\u00EB"
                  },
                  {
                    "id": "U_20AC",
                    "text": "\u20AC"
                  }
                ]
              },
              {
                "id": "U_0072",
                "text": "r",
                "sk": [
                  {
                    "id": "U_00AE",
                    "text": "\u00AE"
                  }
                ]
              },
              {
                "id": "U_0074",
                "text": "t"
              },
              {
                "id": "U_0079",
                "text": "y"
              },
              {
                "id": "U_0075",
                "text": "u"
              },
              {
                "id": "U_0069",
                "text": "i"
              },
              {
                "id": "U_006F",
                "text": "o",
                "sk": [
                  {
                    "id": "U_00F3",
                    "text": "\u00F3"
                  },
                  {
                    "id": "U_00F4",
                    "text": "\u00F4"
                  },
                  {
                    "id": "U_00F6",
                    "text": "\u00F6"
                  },
                  {
                    "id": "U_0153",
                    "text": "\u0153"
                  }
                ]
              },
              {
                "id": "U_0070",
                "text": "p"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "U_014B",
                "text": "\u014B",
                "sk": [
                  {
                    "id": "U_0071",
                    "text": "q"
                  }
                ]
              },
              {
                "id": "U_0073",
                "text": "s",
                "sk": [
                  {
                    "id": "U_0024",
                    "text": "$"
                  }
                ]
              },
              {
                "id": "U_0064",
                "text": "d"
              },
              {
                "id": "U_0066",
                "text": "f"
              },
              {
                "id": "U_0067",
                "text": "g",
                "sk": [
                  {
                    "id": "U_01E7",
                    "text": "\u01E7"
                  }
                ]
              },
              {
                "id": "U_0068",
                "text": "h"
              },
              {
                "id": "U_006A",
                "text": "j"
              },
              {
                "id": "U_006B",
                "text": "k"
              },
              {
                "id": "U_006C",
                "text": "l"
              },
              {
                "id": "U_006D",
                "text": "m"
              },
              {
                "width": "10",
                "id": "T_new_88",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "shift",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "layer": "default",
                "id": "U_0077",
                "text": "w"
              },
              {
                "id": "U_01B4",
                "text": "\u01B4",
                "sk": [
                  {
                    "id": "U_0078",
                    "text": "x"
                  }
                ]
              },
              {
                "id": "U_0063",
                "text": "c",
                "sk": [
                  {
                    "id": "U_00A9",
                    "text": "\u00A9"
                  },
                  {
                    "id": "U_00E7",
                    "text": "\u00E7"
                  }
                ]
              },
              {
                "id": "U_0253",
                "text": "\u0253",
                "sk": [
                  {
                    "id": "U_0076",
                    "text": "v"
                  }
                ]
              },
              {
                "id": "U_0062",
                "text": "b"
              },
              {
                "id": "U_006E",
                "text": "n",
                "sk": [
                  {
                    "id": "U_00F1",
                    "text": "\u00F1"
                  },
                  {
                    "id": "U_0272",
                    "text": "\u0272"
                  }
                ]
              },
              {
                "nextlayer": "shift",
                "id": "U_002E",
                "text": ".",
                "sk": [
                  {
                    "id": "U_002D",
                    "text": "-"
                  },
                  {
                    "id": "U_005F",
                    "text": "_"
                  }
                ]
              },
              {
                "nextlayer": "shift",
                "id": "U_003F",
                "text": "?",
                "sk": [
                  {
                    "id": "U_0027",
                    "text": "'"
                  },
                  {
                    "nextlayer": "shift",
                    "layer": "default",
                    "id": "U_0021",
                    "text": "!"
                  },
                  {
                    "id": "U_0022",
                    "text": "\""
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "caps",
                "id": "K_CAPS",
                "sp": "1",
                "text": "\u21EA"
              },
              {
                "nextlayer": "numeric",
                "width": "110",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "110",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "410",
                "id": "K_SPACE"
              },
              {
                "layer": "default",
                "id": "U_002C",
                "text": ",",
                "sk": [
                  {
                    "id": "U_003A",
                    "text": ":"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  }
                ]
              },
              {
                "id": "U_1F54C",
                "text": "\uD83D\uDD4C",
                "sk": [
                  {
                    "id": "U_1F4FF",
                    "text": "\uD83D\uDCFF"
                  },
                  {
                    "id": "U_FDFA",
                    "text": "\uFDFA"
                  },
                  {
                    "id": "U_FDF4",
                    "text": "\uFDF4"
                  },
                  {
                    "id": "U_FDF2",
                    "text": "\uFDF2"
                  },
                  {
                    "id": "U_FDFD",
                    "text": "\uFDFD"
                  }
                ]
              },
              {
                "nextlayer": "shift",
                "width": "120",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "U_0031",
                "text": "1"
              },
              {
                "id": "U_0032",
                "text": "2"
              },
              {
                "id": "U_0033",
                "text": "3"
              },
              {
                "id": "U_0034",
                "text": "4"
              },
              {
                "id": "U_0035",
                "text": "5"
              },
              {
                "id": "U_0036",
                "text": "6"
              },
              {
                "id": "U_0037",
                "text": "7"
              },
              {
                "id": "U_0038",
                "text": "8"
              },
              {
                "id": "U_0039",
                "text": "9"
              },
              {
                "id": "U_0030",
                "text": "0"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "U_0024",
                "text": "$"
              },
              {
                "id": "U_007E",
                "text": "~"
              },
              {
                "id": "U_0040",
                "text": "@"
              },
              {
                "id": "U_0023",
                "text": "#"
              },
              {
                "id": "U_0025",
                "text": "%"
              },
              {
                "id": "U_0026",
                "text": "&"
              },
              {
                "id": "U_005F",
                "text": "_"
              },
              {
                "id": "U_003D",
                "text": "="
              },
              {
                "id": "U_007C",
                "text": "|"
              },
              {
                "id": "U_005C",
                "text": "\\"
              },
              {
                "width": "10",
                "id": "T_new_3092",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "shift",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "id": "U_005D",
                "text": "[",
                "sk": [
                  {
                    "id": "U_00AB",
                    "text": "\u00AB"
                  },
                  {
                    "id": "U_003C",
                    "text": "<"
                  },
                  {
                    "id": "U_007B",
                    "text": "{"
                  }
                ]
              },
              {
                "id": "U_0028",
                "text": "("
              },
              {
                "id": "U_0029",
                "text": ")"
              },
              {
                "id": "U_FF3B",
                "text": "]",
                "sk": [
                  {
                    "id": "U_00BB",
                    "text": "\u00BB"
                  },
                  {
                    "id": "U_003E",
                    "text": ">"
                  },
                  {
                    "id": "U_007D",
                    "text": "}"
                  }
                ]
              },
              {
                "id": "U_002B",
                "text": "+"
              },
              {
                "id": "U_002D",
                "text": "-"
              },
              {
                "id": "U_002A",
                "text": "*"
              },
              {
                "id": "U_2044",
                "text": "/"
              },
              {
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "caps",
                "id": "K_CAPS",
                "sp": "1",
                "text": "\u21EA"
              },
              {
                "nextlayer": "default",
                "width": "110",
                "id": "K_NUMLOCK",
                "sp": "2",
                "text": "*abc*"
              },
              {
                "width": "110",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "410",
                "id": "K_SPACE"
              },
              {
                "id": "U_00D7",
                "text": "\u00D7"
              },
              {
                "id": "U_1F54C",
                "text": "\uD83D\uDD4C",
                "sk": [
                  {
                    "id": "U_1F4FF",
                    "text": "\uD83D\uDCFF"
                  },
                  {
                    "id": "U_FDFA",
                    "text": "\uFDFA"
                  },
                  {
                    "id": "U_FDF4",
                    "text": "\uFDF4"
                  },
                  {
                    "id": "U_FDF2",
                    "text": "\uFDF2"
                  },
                  {
                    "id": "U_FDFD",
                    "text": "\uFDFD"
                  }
                ]
              },
              {
                "nextlayer": "shift",
                "width": "120",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "caps",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "layer": "shift",
                "id": "U_0041",
                "text": "A",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "U_00C0",
                    "text": "\u00C0"
                  },
                  {
                    "layer": "shift",
                    "id": "U_00C6",
                    "text": "\u00C6"
                  },
                  {
                    "layer": "shift",
                    "id": "U_00C2",
                    "text": "\u00C2"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "U_018A",
                "text": "\u018A",
                "sk": [
                  {
                    "id": "U_005A",
                    "text": "Z"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "U_0045",
                "text": "E",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "U_00C9",
                    "text": "\u00C9"
                  },
                  {
                    "layer": "shift",
                    "id": "U_00C8",
                    "text": "\u00C8"
                  },
                  {
                    "layer": "shift",
                    "id": "U_00CA",
                    "text": "\u00CA"
                  },
                  {
                    "layer": "shift",
                    "id": "U_00CB",
                    "text": "\u00CB"
                  },
                  {
                    "id": "U_20AC",
                    "text": "\u20AC"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_0052",
                "text": "R",
                "sk": [
                  {
                    "id": "U_00AE",
                    "text": "\u00AE"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "U_0054",
                "text": "T"
              },
              {
                "layer": "shift",
                "id": "U_0059",
                "text": "Y"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_0055",
                "text": "U"
              },
              {
                "layer": "shift",
                "id": "U_0049",
                "text": "I"
              },
              {
                "layer": "shift",
                "id": "U_004F",
                "text": "O",
                "sk": [
                  {
                    "id": "U_00D3",
                    "text": "\u00D3"
                  },
                  {
                    "id": "U_00D6",
                    "text": "\u00D6"
                  },
                  {
                    "id": "U_0152",
                    "text": "\u0152"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "U_0050",
                "text": "P"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "layer": "shift",
                "id": "U_014A",
                "text": "\u014A",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "U_0051",
                    "text": "Q"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "U_0053",
                "text": "S",
                "sk": [
                  {
                    "id": "U_0024",
                    "text": "$"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "U_0044",
                "text": "D"
              },
              {
                "layer": "shift",
                "id": "U_0046",
                "text": "F"
              },
              {
                "layer": "shift",
                "id": "U_0047",
                "text": "G",
                "sk": [
                  {
                    "id": "U_01E6",
                    "text": "\u01E6"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "U_0048",
                "text": "H"
              },
              {
                "layer": "shift",
                "id": "U_004A",
                "text": "J"
              },
              {
                "layer": "shift",
                "id": "U_004B",
                "text": "K"
              },
              {
                "layer": "shift",
                "id": "U_004C",
                "text": "L"
              },
              {
                "layer": "shift",
                "id": "U_004D",
                "text": "M"
              },
              {
                "width": "10",
                "id": "T_new_760",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "shift",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "layer": "shift",
                "id": "U_0057",
                "text": "W"
              },
              {
                "layer": "shift",
                "id": "U_01B3",
                "text": "\u01B3",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "U_0058",
                    "text": "X"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "U_0043",
                "text": "C",
                "sk": [
                  {
                    "id": "U_00A9",
                    "text": "\u00A9"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "U_0181",
                "text": "\u0181",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "U_0056",
                    "text": "V"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "U_0042",
                "text": "B"
              },
              {
                "layer": "shift",
                "id": "U_004E",
                "text": "N",
                "sk": [
                  {
                    "id": "U_00D1",
                    "text": "\u00D1"
                  },
                  {
                    "id": "U_019D",
                    "text": "\u019D"
                  }
                ]
              },
              {
                "id": "U_002E",
                "text": ".",
                "sk": [
                  {
                    "id": "U_005F",
                    "text": "_"
                  },
                  {
                    "id": "K_HYPHEN",
                    "text": "-"
                  }
                ]
              },
              {
                "id": "U_003F",
                "text": "?",
                "sk": [
                  {
                    "id": "U_0027",
                    "text": "'"
                  },
                  {
                    "nextlayer": "shift",
                    "id": "U_0021",
                    "text": "!"
                  },
                  {
                    "id": "U_0022",
                    "text": "\""
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "default",
                "id": "K_CAPS",
                "sp": "2",
                "text": "\u21EA"
              },
              {
                "nextlayer": "numeric",
                "width": "110",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "110",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "410",
                "id": "K_SPACE"
              },
              {
                "layer": "default",
                "id": "U_002C",
                "text": ",",
                "sk": [
                  {
                    "id": "U_003A",
                    "text": ":"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  }
                ]
              },
              {
                "nextlayer": "shift",
                "id": "U_1F54C",
                "text": "\uD83D\uDD4C",
                "sk": [
                  {
                    "nextlayer": "shift",
                    "id": "U_1F4FF",
                    "text": "\uD83D\uDCFF"
                  },
                  {
                    "nextlayer": "shift",
                    "id": "U_FDFA",
                    "text": "\uFDFA"
                  },
                  {
                    "nextlayer": "shift",
                    "id": "U_FDF4",
                    "text": "\uFDF4"
                  },
                  {
                    "nextlayer": "shift",
                    "id": "U_FDF2",
                    "text": "\uFDF2"
                  },
                  {
                    "nextlayer": "shift",
                    "id": "U_FDFD",
                    "text": "\uFDFD"
                  }
                ]
              },
              {
                "nextlayer": "shift",
                "width": "120",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      }
    ]
  },
  "tablet": {
    "font": "Sawarabi Gothic",
    "fontsize": "1.3em",
    "displayUnderlying": true,
    "layer": [
      {
        "id": "shift",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "nextlayer": "default",
                "id": "K_A",
                "text": "A",
                "sk": [
                  {
                    "nextlayer": "default",
                    "layer": "shift",
                    "id": "U_00C0",
                    "text": "\u00C0"
                  },
                  {
                    "nextlayer": "default",
                    "layer": "shift",
                    "id": "U_00C6",
                    "text": "\u00C6"
                  },
                  {
                    "nextlayer": "default",
                    "id": "U_00C2",
                    "text": "\u00C2"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_018A",
                "text": "\u018A",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "K_Z",
                    "text": "Z"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "K_E",
                "text": "E",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_00C9",
                    "text": "\u00C9"
                  },
                  {
                    "nextlayer": "default",
                    "id": "U_00C8",
                    "text": "\u00C8"
                  },
                  {
                    "nextlayer": "default",
                    "id": "U_00CA",
                    "text": "\u00CA"
                  },
                  {
                    "nextlayer": "default",
                    "id": "U_00CB",
                    "text": "\u00CB"
                  },
                  {
                    "nextlayer": "default",
                    "id": "U_20AC",
                    "text": "\u20AC"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "K_R",
                "text": "R",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_00AE",
                    "text": "\u00AE"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "K_T",
                "text": "T"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "K_Y",
                "text": "Y"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "K_U",
                "text": "U"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "K_I",
                "text": "I"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "K_O",
                "text": "O",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_00D3",
                    "text": "\u00D3"
                  },
                  {
                    "nextlayer": "default",
                    "id": "U_00D6",
                    "text": "\u00D6"
                  },
                  {
                    "nextlayer": "default",
                    "id": "U_0152",
                    "text": "\u0152"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "K_P",
                "text": "P"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_014A",
                "text": "\u014A",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "K_q",
                    "text": "Q"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "K_S",
                "text": "S",
                "sk": [
                  {
                    "id": "U_0024",
                    "text": "$"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "K_D",
                "text": "D"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "K_F",
                "text": "F"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "K_G",
                "text": "G",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_01E6",
                    "text": "\u01E6"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "K_H",
                "text": "H"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "K_J",
                "text": "J"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "K_K",
                "text": "K"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "K_L",
                "text": "L"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "K_M",
                "text": "M"
              },
              {
                "width": "10",
                "id": "T_new_760",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "default",
                "id": "K_SHIFT",
                "sp": "2",
                "text": "*Shift*"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "K_W",
                "text": "W"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_01B3",
                "text": "\u01B3",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "K_X",
                    "text": "X"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "K_C",
                "text": "C",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_00A9",
                    "text": "\u00A9"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "U_0181",
                "text": "\u0181",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "K_V",
                    "text": "V"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "K_B",
                "text": "B"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "K_N",
                "text": "N",
                "sk": [
                  {
                    "nextlayer": "default",
                    "id": "U_00D1",
                    "text": "\u00D1"
                  },
                  {
                    "nextlayer": "shift",
                    "id": "U_019D",
                    "text": "\u019D"
                  }
                ]
              },
              {
                "nextlayer": "shift",
                "id": "U_002E",
                "text": ".",
                "sk": [
                  {
                    "id": "U_002D",
                    "text": "-"
                  },
                  {
                    "id": "U_005F",
                    "text": "_"
                  }
                ]
              },
              {
                "nextlayer": "shift",
                "id": "U_003F",
                "text": "?",
                "sk": [
                  {
                    "id": "U_0027",
                    "text": "'"
                  },
                  {
                    "nextlayer": "shift",
                    "id": "U_0021",
                    "text": "!"
                  },
                  {
                    "id": "U_0022",
                    "text": "\""
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "caps",
                "id": "K_CAPS",
                "sp": "1",
                "text": "\u21EA"
              },
              {
                "nextlayer": "numeric",
                "width": "110",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "110",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "nextlayer": "shift",
                "width": "410",
                "id": "K_SPACE"
              },
              {
                "layer": "default",
                "id": "K_COMMA",
                "text": ",",
                "sk": [
                  {
                    "id": "K_COLON",
                    "text": ":"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  }
                ]
              },
              {
                "nextlayer": "shift",
                "id": "U_1F54C",
                "text": "\uD83D\uDD4C",
                "sk": [
                  {
                    "nextlayer": "shift",
                    "id": "U_1F4FF",
                    "text": "\uD83D\uDCFF"
                  },
                  {
                    "nextlayer": "shift",
                    "id": "U_FDFA",
                    "text": "\uFDFA"
                  },
                  {
                    "nextlayer": "shift",
                    "id": "U_FDF4",
                    "text": "\uFDF4"
                  },
                  {
                    "nextlayer": "shift",
                    "id": "U_FDF2",
                    "text": "\uFDF2"
                  },
                  {
                    "nextlayer": "shift",
                    "id": "U_FDFD",
                    "text": "\uFDFD"
                  }
                ]
              },
              {
                "nextlayer": "shift",
                "width": "120",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "U_0061",
                "text": "a",
                "sk": [
                  {
                    "id": "U_0040",
                    "text": "@"
                  },
                  {
                    "id": "U_00E0",
                    "text": "\u00E0"
                  },
                  {
                    "id": "U_00E6",
                    "text": "\u00E6"
                  },
                  {
                    "id": "U_00E2",
                    "text": "\u00E2"
                  }
                ]
              },
              {
                "id": "U_0257",
                "text": "\u0257",
                "sk": [
                  {
                    "layer": "default",
                    "id": "U_007A",
                    "text": "z"
                  }
                ]
              },
              {
                "id": "U_0065",
                "text": "e",
                "sk": [
                  {
                    "id": "U_00E9",
                    "text": "\u00E9"
                  },
                  {
                    "id": "U_00E8",
                    "text": "\u00E8"
                  },
                  {
                    "id": "U_00EA",
                    "text": "\u00EA"
                  },
                  {
                    "id": "U_00EB",
                    "text": "\u00EB"
                  },
                  {
                    "id": "U_20AC",
                    "text": "\u20AC"
                  }
                ]
              },
              {
                "id": "U_0072",
                "text": "r",
                "sk": [
                  {
                    "id": "U_00AE",
                    "text": "\u00AE"
                  }
                ]
              },
              {
                "id": "U_0074",
                "text": "t"
              },
              {
                "id": "U_0079",
                "text": "y"
              },
              {
                "id": "U_0075",
                "text": "u"
              },
              {
                "id": "U_0069",
                "text": "i"
              },
              {
                "id": "U_006F",
                "text": "o",
                "sk": [
                  {
                    "id": "U_00F3",
                    "text": "\u00F3"
                  },
                  {
                    "id": "U_00F4",
                    "text": "\u00F4"
                  },
                  {
                    "id": "U_00F6",
                    "text": "\u00F6"
                  },
                  {
                    "id": "U_0153",
                    "text": "\u0153"
                  }
                ]
              },
              {
                "id": "U_0070",
                "text": "p"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "U_014B",
                "text": "\u014B",
                "sk": [
                  {
                    "id": "K_Q",
                    "text": "q"
                  }
                ]
              },
              {
                "id": "U_0073",
                "text": "s",
                "sk": [
                  {
                    "id": "U_0024",
                    "text": "$"
                  }
                ]
              },
              {
                "id": "U_0064",
                "text": "d"
              },
              {
                "id": "U_0066",
                "text": "f"
              },
              {
                "id": "U_0067",
                "text": "g",
                "sk": [
                  {
                    "id": "U_01E7",
                    "text": "\u01E7"
                  }
                ]
              },
              {
                "id": "U_0068",
                "text": "h"
              },
              {
                "id": "U_006A",
                "text": "j"
              },
              {
                "id": "U_006B",
                "text": "k"
              },
              {
                "id": "U_006C",
                "text": "l"
              },
              {
                "id": "U_006D",
                "text": "m"
              },
              {
                "width": "10",
                "id": "T_new_88",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "shift",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "id": "U_0077",
                "text": "w"
              },
              {
                "id": "U_01B4",
                "text": "\u01B4",
                "sk": [
                  {
                    "id": "U_0078",
                    "text": "x"
                  }
                ]
              },
              {
                "id": "K_C",
                "text": "c",
                "sk": [
                  {
                    "id": "U_00A9",
                    "text": "\u00A9"
                  },
                  {
                    "id": "U_00E7",
                    "text": "\u00E7"
                  }
                ]
              },
              {
                "id": "U_0253",
                "text": "\u0253",
                "sk": [
                  {
                    "id": "U_0076",
                    "text": "v"
                  }
                ]
              },
              {
                "id": "U_0062",
                "text": "b"
              },
              {
                "id": "U_006E",
                "text": "n",
                "sk": [
                  {
                    "id": "U_00F1",
                    "text": "\u00F1"
                  },
                  {
                    "id": "U_0272",
                    "text": "\u0272"
                  }
                ]
              },
              {
                "nextlayer": "shift",
                "id": "U_002E",
                "text": ".",
                "sk": [
                  {
                    "id": "U_002D",
                    "text": "-"
                  },
                  {
                    "id": "U_005F",
                    "text": "_"
                  }
                ]
              },
              {
                "nextlayer": "shift",
                "id": "U_003F",
                "text": "?",
                "sk": [
                  {
                    "id": "U_0027",
                    "text": "'"
                  },
                  {
                    "nextlayer": "shift",
                    "layer": "default",
                    "id": "U_0021",
                    "text": "!"
                  },
                  {
                    "id": "U_0022",
                    "text": "\""
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "caps",
                "id": "K_CAPS",
                "sp": "1",
                "text": "\u21EA"
              },
              {
                "nextlayer": "numeric",
                "width": "110",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "110",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "410",
                "id": "K_SPACE"
              },
              {
                "layer": "default",
                "id": "K_COMMA",
                "text": ",",
                "sk": [
                  {
                    "id": "U_003A",
                    "text": ":"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  }
                ]
              },
              {
                "id": "U_1F54C",
                "text": "\uD83D\uDD4C",
                "sk": [
                  {
                    "id": "U_1F4FF",
                    "text": "\uD83D\uDCFF"
                  },
                  {
                    "id": "U_FDFA",
                    "text": "\uFDFA"
                  },
                  {
                    "id": "U_FDF4",
                    "text": "\uFDF4"
                  },
                  {
                    "id": "U_FDF2",
                    "text": "\uFDF2"
                  },
                  {
                    "id": "U_FDFD",
                    "text": "\uFDFD"
                  }
                ]
              },
              {
                "nextlayer": "shift",
                "width": "120",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "U_0031",
                "text": "1"
              },
              {
                "id": "U_0032",
                "text": "2"
              },
              {
                "id": "U_0033",
                "text": "3"
              },
              {
                "id": "U_0034",
                "text": "4"
              },
              {
                "id": "U_0035",
                "text": "5"
              },
              {
                "id": "U_0036",
                "text": "6"
              },
              {
                "id": "U_0037",
                "text": "7"
              },
              {
                "id": "U_0038",
                "text": "8"
              },
              {
                "id": "U_0039",
                "text": "9"
              },
              {
                "id": "U_0030",
                "text": "0"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "U_0024",
                "text": "$"
              },
              {
                "id": "U_007E",
                "text": "~"
              },
              {
                "id": "U_0040",
                "text": "@"
              },
              {
                "id": "U_0023",
                "text": "#"
              },
              {
                "id": "U_0025",
                "text": "%"
              },
              {
                "id": "U_0026",
                "text": "&"
              },
              {
                "id": "U_005F",
                "text": "_"
              },
              {
                "id": "U_003D",
                "text": "="
              },
              {
                "id": "U_007C",
                "text": "|"
              },
              {
                "id": "U_005C",
                "text": "\\"
              },
              {
                "width": "10",
                "id": "T_new_3092",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "shift",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "id": "U_005B",
                "text": "[",
                "sk": [
                  {
                    "id": "U_00AB",
                    "text": "\u00AB"
                  },
                  {
                    "id": "U_003C",
                    "text": "<"
                  },
                  {
                    "id": "U_007B",
                    "text": "{"
                  }
                ]
              },
              {
                "id": "U_0028",
                "text": "("
              },
              {
                "id": "U_0029",
                "text": ")"
              },
              {
                "id": "U_005D",
                "text": "]",
                "sk": [
                  {
                    "id": "U_00BB",
                    "text": "\u00BB"
                  },
                  {
                    "id": "U_003E",
                    "text": ">"
                  },
                  {
                    "id": "U_007D",
                    "text": "}"
                  }
                ]
              },
              {
                "id": "U_002B",
                "text": "+"
              },
              {
                "id": "U_002D",
                "text": "-"
              },
              {
                "id": "U_002A",
                "text": "*"
              },
              {
                "id": "U_2044",
                "text": "\u2044"
              },
              {
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "caps",
                "id": "K_CAPS",
                "sp": "1",
                "text": "\u21EA"
              },
              {
                "nextlayer": "default",
                "width": "110",
                "id": "K_NUMLOCK",
                "sp": "2",
                "text": "*abc*"
              },
              {
                "width": "110",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "410",
                "id": "K_SPACE"
              },
              {
                "id": "U_00D7",
                "text": "\u00D7"
              },
              {
                "id": "U_1F54C",
                "text": "\uD83D\uDD4C",
                "sk": [
                  {
                    "id": "U_1F4FF",
                    "text": "\uD83D\uDCFF"
                  },
                  {
                    "id": "U_FDFA",
                    "text": "\uFDFA"
                  },
                  {
                    "id": "U_FDF4",
                    "text": "\uFDF4"
                  },
                  {
                    "id": "U_FDF2",
                    "text": "\uFDF2"
                  },
                  {
                    "id": "U_FDFD",
                    "text": "\uFDFD"
                  }
                ]
              },
              {
                "nextlayer": "shift",
                "width": "120",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "caps",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "layer": "shift",
                "id": "K_A",
                "text": "A",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "U_00C0",
                    "text": "\u00C0"
                  },
                  {
                    "layer": "shift",
                    "id": "U_00C6",
                    "text": "\u00C6"
                  },
                  {
                    "layer": "shift",
                    "id": "U_00C2",
                    "text": "\u00C2"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "U_018A",
                "text": "\u018A",
                "sk": [
                  {
                    "id": "K_Z",
                    "text": "Z"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_E",
                "text": "E",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "U_00C9",
                    "text": "\u00C9"
                  },
                  {
                    "layer": "shift",
                    "id": "U_00C8",
                    "text": "\u00C8"
                  },
                  {
                    "layer": "shift",
                    "id": "U_00CA",
                    "text": "\u00CA"
                  },
                  {
                    "layer": "shift",
                    "id": "U_00CB",
                    "text": "\u00CB"
                  },
                  {
                    "id": "U_20AC",
                    "text": "\u20AC"
                  }
                ]
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "K_R",
                "text": "R",
                "sk": [
                  {
                    "id": "U_00AE",
                    "text": "\u00AE"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_T",
                "text": "T"
              },
              {
                "layer": "shift",
                "id": "K_Y",
                "text": "Y"
              },
              {
                "nextlayer": "default",
                "layer": "shift",
                "id": "K_U",
                "text": "U"
              },
              {
                "layer": "shift",
                "id": "K_I",
                "text": "I"
              },
              {
                "layer": "shift",
                "id": "K_O",
                "text": "O",
                "sk": [
                  {
                    "id": "U_00D3",
                    "text": "\u00D3"
                  },
                  {
                    "id": "U_00D6",
                    "text": "\u00D6"
                  },
                  {
                    "id": "U_0152",
                    "text": "\u0152"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_P",
                "text": "P"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "layer": "shift",
                "id": "U_014A",
                "text": "\u014A",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_Q",
                    "text": "Q"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_S",
                "text": "S",
                "sk": [
                  {
                    "id": "U_0024",
                    "text": "$"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_D",
                "text": "D"
              },
              {
                "layer": "shift",
                "id": "K_F",
                "text": "F"
              },
              {
                "layer": "shift",
                "id": "K_G",
                "text": "G",
                "sk": [
                  {
                    "id": "U_01E6",
                    "text": "\u01E6"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_H",
                "text": "H"
              },
              {
                "layer": "shift",
                "id": "K_J",
                "text": "J"
              },
              {
                "layer": "shift",
                "id": "K_K",
                "text": "K"
              },
              {
                "layer": "shift",
                "id": "K_L",
                "text": "L"
              },
              {
                "layer": "shift",
                "id": "K_M",
                "text": "M"
              },
              {
                "width": "10",
                "id": "T_new_760",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "shift",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "layer": "shift",
                "id": "K_W",
                "text": "W"
              },
              {
                "layer": "shift",
                "id": "U_01B3",
                "text": "\u01B3",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_X",
                    "text": "X"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_C",
                "text": "C",
                "sk": [
                  {
                    "id": "U_00A9",
                    "text": "\u00A9"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "U_0181",
                "text": "\u0181",
                "sk": [
                  {
                    "layer": "shift",
                    "id": "K_V",
                    "text": "V"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_B",
                "text": "B"
              },
              {
                "layer": "shift",
                "id": "K_N",
                "text": "N",
                "sk": [
                  {
                    "id": "U_00D1",
                    "text": "\u00D1"
                  },
                  {
                    "id": "U_019D",
                    "text": "\u019D"
                  }
                ]
              },
              {
                "id": "U_002E",
                "text": ".",
                "sk": [
                  {
                    "id": "U_005F",
                    "text": "_"
                  },
                  {
                    "id": "K_HYPHEN",
                    "text": "-"
                  }
                ]
              },
              {
                "id": "U_003F",
                "text": "?",
                "sk": [
                  {
                    "id": "U_0027",
                    "text": "'"
                  },
                  {
                    "nextlayer": "shift",
                    "id": "U_0021",
                    "text": "!"
                  },
                  {
                    "id": "U_0022",
                    "text": "\""
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "default",
                "id": "K_CAPS",
                "sp": "2",
                "text": "\u21EA"
              },
              {
                "nextlayer": "numeric",
                "width": "110",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "110",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "410",
                "id": "K_SPACE"
              },
              {
                "id": "K_COMMA",
                "text": ",",
                "sk": [
                  {
                    "id": "K_COLON",
                    "text": ":"
                  },
                  {
                    "id": "U_003B",
                    "text": ";"
                  }
                ]
              },
              {
                "nextlayer": "shift",
                "id": "U_1F54C",
                "text": "\uD83D\uDD4C",
                "sk": [
                  {
                    "nextlayer": "shift",
                    "id": "U_1F4FF",
                    "text": "\uD83D\uDCFF"
                  },
                  {
                    "nextlayer": "shift",
                    "id": "U_FDFA",
                    "text": "\uFDFA"
                  },
                  {
                    "nextlayer": "shift",
                    "id": "U_FDF4",
                    "text": "\uFDF4"
                  },
                  {
                    "nextlayer": "shift",
                    "id": "U_FDF2",
                    "text": "\uFDF2"
                  },
                  {
                    "nextlayer": "shift",
                    "id": "U_FDFD",
                    "text": "\uFDFD"
                  }
                ]
              },
              {
                "nextlayer": "shift",
                "width": "120",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      }
    ]
  }
}
;
  this.KCSS="/*Android global*/\n .phone.android .kmw-key.kmw-key-shift,\n .phone.android .kmw-key.kmw-key-special,\n .phone.android .kmw-keyboard-pulaar_fulfulde_2023 #default-U_1F54C,\n .phone.android .kmw-keyboard-pulaar_fulfulde_2023 #shift-U_1F54C,\n .phone.android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-U_1F54C,\n .phone.android .kmw-keyboard-pulaar_fulfulde_2023 #caps-U_1F54C,\n .phone.android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_NUMLOCK {\n   background: #3b3939;\n   color: rgb(255, 255, 255);\n   border: 0.1px solid rgb(209, 208, 208);\n }\n \n .phone.android .kmw-key.kmw-key-default {\n   background: #000000;\n   color: rgb(255, 255, 255);\n   border: 1px solid #ffffff;\n }\n /*.phone.android .kmw-key.kmw-key-shift-on { background: #ffffff; color:rgb(0, 0, 0);border:1px solid rgb(0, 0, 0); }\n \n /*Special on */\n .phone.android .kmw-key.kmw-key-shift-on,\n .phone.android .kmw-key.kmw-key-special-on {\n   color: #fff;\n   background-color: #77f;\n   border: 1px solid #ffffff;\n }\n \n /*Android - default*/\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_A,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-U_0257,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_E,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_R,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_T,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_Y,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_U,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_I,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_O,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_P,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-U_01B4,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_S,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_D,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_F,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_G,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_H,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_J,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_K,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_L,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_M,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_W,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-U_014B,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_C,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-U_0253,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_B,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_N,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-U_002E,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-U_003F {\n   background: #000000;\n   color: rgb(255, 255, 255);\n   border: 0.1px solid #ffffff;\n   vertical-align: middle;\n }\n \n /*Special Keys*/\n /*.android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_CAPS,*/\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_BKSP,\n /*.android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_SHIFT,*/\n /*.android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_NUMLOCK,*/\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_LOPT,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_SPACE,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #default-K_ENTER,\n /*.android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_CAPS,*/\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_BKSP,\n /*.android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_SHIFT,*/\n /*.android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_NUMLOCK,*/\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_LOPT,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_SPACE,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_ENTER,\n /*.android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_CAPS,*/\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_BKSP,\n /*.android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_SHIFT,*/\n /*.android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_NUMLOCK,*/\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_LOPT,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_SPACE,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_ENTER,\n /*.android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-K_CAPS,*/\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-K_BKSP,\n /*.android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-K_SHIFT,*/\n /*.android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-K_NUMLOCK,*/\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-K_LOPT,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-K_SPACE,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-K_ENTER {\n   background: #3b3939;\n   color: rgb(255, 255, 255);\n   border: 0.1px solid rgb(209, 208, 208);\n }\n \n /*Android - shift*/\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_A,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-U_018A,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_E,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_R,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_T,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_Y,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_U,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_I,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_O,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_P,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-U_014A,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_S,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_D,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_F,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_G,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_H,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_J,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_K,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_L,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_M,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_W,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-U_01B3,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_C,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-U_0181,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_B,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-K_N,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-U_002E,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #shift-U_003F {\n   background: #000000;\n   color: rgb(255, 255, 255);\n   border: 1px solid #ffffff;\n }\n \n /*Android numeric*/\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-K_1,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-K_2,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-K_3,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-K_4,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-K_5,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-K_6,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-K_7,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-K_8,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-K_9,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-K_0,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-U_0024,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-U_007E,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-U_0040,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-U_0023,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-U_0025,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-U_0026,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-U_005F,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-K_EQUAL,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-U_007C,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-K_BKSLASH,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-K_LBRKT,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-U_0028,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-U_0029,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-K_RBRKT,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-U_002B,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-K_HYPHEN,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-U_002A,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #numeric-K_SLASH {\n   background: #000000;\n   color: rgb(255, 255, 255);\n   border: 1px solid #ffffff;\n }\n \n /*Android caps*/\n .android .kmw-Keyboard-pulaar_fulfulde_2023 #caps-K_A,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-U_018A,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_E,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_R,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_T,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_Y,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_U,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_I,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_O,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_P,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-U_014A,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_S,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_D,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_F,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_G,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_H,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_J,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_K,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_L,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_M,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_W,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-U_01B3,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_C,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-U_0181,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_B,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-K_N,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-U_002E,\n .android .kmw-keyboard-pulaar_fulfulde_2023 #caps-U_003F {\n   background: #000000;\n   color: rgb(255, 255, 255);\n   border: 1px solid #ffffff;\n }\n \n /*popup*/\n .phone.android .kmw-Keyboard-pulaar_fulfulde_2023 .kmw-key.kmw-key-popup {\n   background: #000000;\n   color: rgb(255, 255, 255);\n   border: 1px solid #ffffff;\n }\n \n /*iOS*/\n .ios .kmw-keyboard-pulaar_fulfulde_2023 #default-K_A,\n .ios .kmw-keyboard-pulaar_fulfulde_2023 #default-U_0257,\n .ios .kmw-keyboard-pulaar_fulfulde_2023 #default-K_E {\n   background: #181d18;\n }\n ";
  this.s_key_13=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  this.s_out_14="nbɓcƴwŋsdfghjklmùóñpoiuytreɗaNBƁCƳWŊSDFGHJKLMÙÓÑPOIUYTREƊA";
  this.s_caps_15="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  this.s_digit_16="0123456789";
  this.s_sentencePunctuation_20=".?!";
  this.s26="";
  this.s27="numeric";
  this.s28="caps";
  this.s29="";
  this.s30="shift";
  this.s31="shift";
  this.s32="shift";
  this.s33="default";
  this.KVER="16.0.138.0";
  this.KVS=[];
  this.gs=function(t,e) {
    return this.g_main_3(t,e);
  };
  this.gn=function(t,e) {
    return this.g_NewContext_0(t,e);
  };
  this.gpk=function(t,e) {
    return this.g_PostKeystroke_1(t,e);
  };
  this.gs=function(t,e) {
    return this.g_main_3(t,e);
  };
  this.g_NewContext_0=function(t,e) {
    var k=KeymanWeb,r=1,m=0;
    if(!m) {
    
      r=this.g_detectStartOfSentence_2(t,e);
      m=2;
    }
    return r;
  };
  this.g_PostKeystroke_1=function(t,e) {
    var k=KeymanWeb,r=1,m=0;
      if(k.KFCM(1,t,[{t:'a',a:this.s_digit_16}])&&k.KIFS(42,this.s26,t)&&k.KIFS(33,this.s27,t)){
        m=1;   // Line 38
      }
      else if(k.KIFS(33,this.s28,t)){
        m=1;   // Line 41
      }
      else if(k.KIFS(42,this.s29,t)){
        m=1;   // Line 45
        r=this.g_detectStartOfSentence_2(t,e);
        m=2;
      }
    return r;
  };
  this.g_detectStartOfSentence_2=function(t,e) {
    var k=KeymanWeb,r=1,m=0;
      if(k.KFCM(3,t,[{t:'a',a:this.s_sentencePunctuation_20},' ',' '])){
        m=1;   // Line 61
        k.KSETS(33,this.s32,t);
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_sentencePunctuation_20},' '])){
        m=1;   // Line 60
        k.KSETS(33,this.s31,t);
      }
      else if(k.KFCM(1,t,[{t:'n'}])){
        m=1;   // Line 56
        k.KSETS(33,this.s30,t);
      }
    if(!m) {
    
      k.KSETS(33,this.s33,t);
    }
    return r;
  };
  this.g_main_3=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_oE2 /* 0xE2 */)) {
      if(1){
        r=m=1;   // Line 135
        k.KDC(0,t);
        k.KO(-1,t,"<");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_oE2 /* 0xE2 */)) {
      if(1){
        r=m=1;   // Line 160
        k.KDC(0,t);
        k.KO(-1,t,"<");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 94
        k.KDC(0,t);
        k.KO(-1,t,"1");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 76
        k.KDC(0,t);
        k.KO(-1,t,"%");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 79
        k.KDC(0,t);
        k.KO(-1,t,"%");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 92
        k.KDC(0,t);
        k.KO(-1,t,"3");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 91
        k.KDC(0,t);
        k.KO(-1,t,"4");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 90
        k.KDC(0,t);
        k.KO(-1,t,"5");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 88
        k.KDC(0,t);
        k.KO(-1,t,"7");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_QUOTE /* 0xDE */)) {
      if(1){
        r=m=1;   // Line 171
        k.KDC(0,t);
        k.KO(-1,t,"ù");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 86
        k.KDC(0,t);
        k.KO(-1,t,"9");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 85
        k.KDC(0,t);
        k.KO(-1,t,"0");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 87
        k.KDC(0,t);
        k.KO(-1,t,"8");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 83
        k.KDC(0,t);
        k.KO(-1,t,"+");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 152
        k.KDC(0,t);
        k.KO(-1,t,";");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 138
        k.KDC(0,t);
        k.KO(-1,t,")");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 151
        k.KDC(0,t);
        k.KO(-1,t,":");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 150
        k.KDC(0,t);
        k.KO(-1,t,"!");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_0 /* 0x30 */)) {
      if(1){
        r=m=1;   // Line 139
        k.KDC(0,t);
        k.KO(-1,t,"à");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_1 /* 0x31 */)) {
      if(1){
        r=m=1;   // Line 148
        k.KDC(0,t);
        k.KO(-1,t,"&");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 147
        k.KDC(0,t);
        k.KO(-1,t,"é");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_3 /* 0x33 */)) {
      if(1){
        r=m=1;   // Line 146
        k.KDC(0,t);
        k.KO(-1,t,"\"");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_4 /* 0x34 */)) {
      if(1){
        r=m=1;   // Line 145
        k.KDC(0,t);
        k.KO(-1,t,"'");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_5 /* 0x35 */)) {
      if(1){
        r=m=1;   // Line 144
        k.KDC(0,t);
        k.KO(-1,t,"(");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 143
        k.KDC(0,t);
        k.KO(-1,t,"-");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_7 /* 0x37 */)) {
      if(1){
        r=m=1;   // Line 142
        k.KDC(0,t);
        k.KO(-1,t,"è");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_8 /* 0x38 */)) {
      if(1){
        r=m=1;   // Line 141
        k.KDC(0,t);
        k.KO(-1,t,"_");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_9 /* 0x39 */)) {
      if(1){
        r=m=1;   // Line 140
        k.KDC(0,t);
        k.KO(-1,t,"¨");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 104
        k.KDC(0,t);
        k.KO(-1,t,"M");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_COLON /* 0xBA */)) {
      if(1){
        r=m=1;   // Line 170
        k.KDC(0,t);
        k.KO(-1,t,"m");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_COMMA /* 0xBC */)) {
      if(1){
        r=m=1;   // Line 127
        k.KDC(0,t);
        k.KO(-1,t,".");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(1){
        r=m=1;   // Line 137
        k.KDC(0,t);
        k.KO(-1,t,"=");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_PERIOD /* 0xBE */)) {
      if(1){
        r=m=1;   // Line 126
        k.KDC(0,t);
        k.KO(-1,t,"/");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_SLASH /* 0xBF */)) {
      if(1){
        r=m=1;   // Line 125
        k.KDC(0,t);
        k.KO(-1,t,"§");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_2 /* 0x32 */)) {
      if(1){
        r=m=1;   // Line 93
        k.KDC(0,t);
        k.KO(-1,t,"2");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4140 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 77
        k.KDC(0,t);
        k.KO(-1,t,"Q");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4250 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 77
        k.KDC(0,t);
        k.KO(-1,t,"Q");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 95
        k.KDC(0,t);
        k.KO(-1,t,"Ŋ");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 95
        k.KDC(0,t);
        k.KO(-1,t,"Ŋ");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 130
        k.KDC(0,t);
        k.KO(-1,t,"B");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 130
        k.KDC(0,t);
        k.KO(-1,t,"B");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 132
        k.KDC(0,t);
        k.KO(-1,t,"C");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 132
        k.KDC(0,t);
        k.KO(-1,t,"C");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 97
        k.KDC(0,t);
        k.KO(-1,t,"D");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 97
        k.KDC(0,t);
        k.KO(-1,t,"D");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4250 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 82
        k.KDC(0,t);
        k.KO(-1,t,"€");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4140 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 82
        k.KDC(0,t);
        k.KO(-1,t,"€");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 115
        k.KDC(0,t);
        k.KO(-1,t,"E");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 115
        k.KDC(0,t);
        k.KO(-1,t,"E");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 98
        k.KDC(0,t);
        k.KO(-1,t,"F");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 98
        k.KDC(0,t);
        k.KO(-1,t,"F");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 99
        k.KDC(0,t);
        k.KO(-1,t,"G");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 99
        k.KDC(0,t);
        k.KO(-1,t,"G");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4250 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 124
        k.KDC(0,t);
        k.KO(-1,t,"Ǧ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4140 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 124
        k.KDC(0,t);
        k.KO(-1,t,"Ǧ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 100
        k.KDC(0,t);
        k.KO(-1,t,"H");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 100
        k.KDC(0,t);
        k.KO(-1,t,"H");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 110
        k.KDC(0,t);
        k.KO(-1,t,"I");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 110
        k.KDC(0,t);
        k.KO(-1,t,"I");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 101
        k.KDC(0,t);
        k.KO(-1,t,"J");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 101
        k.KDC(0,t);
        k.KO(-1,t,"J");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 102
        k.KDC(0,t);
        k.KO(-1,t,"K");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 102
        k.KDC(0,t);
        k.KO(-1,t,"K");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 103
        k.KDC(0,t);
        k.KO(-1,t,"L");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 103
        k.KDC(0,t);
        k.KO(-1,t,"L");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 128
        k.KDC(0,t);
        k.KO(-1,t,"?");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 128
        k.KDC(0,t);
        k.KO(-1,t,"?");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 129
        k.KDC(0,t);
        k.KO(-1,t,"N");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 129
        k.KDC(0,t);
        k.KO(-1,t,"N");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 109
        k.KDC(0,t);
        k.KO(-1,t,"O");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 109
        k.KDC(0,t);
        k.KO(-1,t,"O");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 108
        k.KDC(0,t);
        k.KO(-1,t,"P");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 108
        k.KDC(0,t);
        k.KO(-1,t,"P");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 116
        k.KDC(0,t);
        k.KO(-1,t,"A");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 116
        k.KDC(0,t);
        k.KO(-1,t,"A");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 114
        k.KDC(0,t);
        k.KO(-1,t,"R");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 114
        k.KDC(0,t);
        k.KO(-1,t,"R");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 96
        k.KDC(0,t);
        k.KO(-1,t,"S");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 96
        k.KDC(0,t);
        k.KO(-1,t,"S");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 113
        k.KDC(0,t);
        k.KO(-1,t,"T");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 113
        k.KDC(0,t);
        k.KO(-1,t,"T");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 111
        k.KDC(0,t);
        k.KO(-1,t,"U");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 111
        k.KDC(0,t);
        k.KO(-1,t,"U");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4140 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 123
        k.KDC(0,t);
        k.KO(-1,t,"V");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4250 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 123
        k.KDC(0,t);
        k.KO(-1,t,"V");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 131
        k.KDC(0,t);
        k.KO(-1,t,"Ɓ");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 131
        k.KDC(0,t);
        k.KO(-1,t,"Ɓ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 117
        k.KDC(0,t);
        k.KO(-1,t,"Ɗ");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 117
        k.KDC(0,t);
        k.KO(-1,t,"Ɗ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4140 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 122
        k.KDC(0,t);
        k.KO(-1,t,"Z");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4250 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 122
        k.KDC(0,t);
        k.KO(-1,t,"Z");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4140 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 72
        k.KDC(0,t);
        k.KO(-1,t,"X");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4250 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 72
        k.KDC(0,t);
        k.KO(-1,t,"X");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 133
        k.KDC(0,t);
        k.KO(-1,t,"Ƴ");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 133
        k.KDC(0,t);
        k.KO(-1,t,"Ƴ");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 112
        k.KDC(0,t);
        k.KO(-1,t,"Y");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 112
        k.KDC(0,t);
        k.KO(-1,t,"Y");
      }
    }
    else if(k.KKM(e, modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4100 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 134
        k.KDC(0,t);
        k.KO(-1,t,"W");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4210 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 134
        k.KDC(0,t);
        k.KO(-1,t,"W");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 80
        k.KDC(0,t);
        k.KO(-1,t,"ɲ");
      }
    }
      if(m) {}
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 173
        k.KDC(0,t);
        k.KO(-1,t,"ñ");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 136
        k.KDC(0,t);
        k.KO(-1,t,"*");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4040 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 75
        k.KDC(0,t);
        k.KO(-1,t,"$");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 172
        k.KDC(0,t);
        k.KO(-1,t,"ó");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_6 /* 0x36 */)) {
      if(1){
        r=m=1;   // Line 89
        k.KDC(0,t);
        k.KO(-1,t,"6");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_HYPHEN /* 0xBD */)) {
      if(1){
        r=m=1;   // Line 84
        k.KDC(0,t);
        k.KO(-1,t,"°");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_BKQUOTE /* 0xC0 */)) {
      if(1){
        r=m=1;   // Line 149
        k.KDC(0,t);
        k.KO(-1,t,"²");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4240 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 78
        k.KDC(0,t);
        k.KO(-1,t,"q");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4150 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 78
        k.KDC(0,t);
        k.KO(-1,t,"q");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 161
        k.KDC(0,t);
        k.KO(-1,t,"ŋ");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_A /* 0x41 */)) {
      if(1){
        r=m=1;   // Line 161
        k.KDC(0,t);
        k.KO(-1,t,"ŋ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 155
        k.KDC(0,t);
        k.KO(-1,t,"b");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 155
        k.KDC(0,t);
        k.KO(-1,t,"b");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 157
        k.KDC(0,t);
        k.KO(-1,t,"c");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 157
        k.KDC(0,t);
        k.KO(-1,t,"c");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 163
        k.KDC(0,t);
        k.KO(-1,t,"d");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 163
        k.KDC(0,t);
        k.KO(-1,t,"d");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4240 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 81
        k.KDC(0,t);
        k.KO(-1,t,"€");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4150 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 81
        k.KDC(0,t);
        k.KO(-1,t,"€");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 181
        k.KDC(0,t);
        k.KO(-1,t,"e");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_E /* 0x45 */)) {
      if(1){
        r=m=1;   // Line 181
        k.KDC(0,t);
        k.KO(-1,t,"e");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 164
        k.KDC(0,t);
        k.KO(-1,t,"f");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 164
        k.KDC(0,t);
        k.KO(-1,t,"f");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4150 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 119
        k.KDC(0,t);
        k.KO(-1,t,"ǧ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4240 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 119
        k.KDC(0,t);
        k.KO(-1,t,"ǧ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 165
        k.KDC(0,t);
        k.KO(-1,t,"g");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_G /* 0x47 */)) {
      if(1){
        r=m=1;   // Line 165
        k.KDC(0,t);
        k.KO(-1,t,"g");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 166
        k.KDC(0,t);
        k.KO(-1,t,"h");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_H /* 0x48 */)) {
      if(1){
        r=m=1;   // Line 166
        k.KDC(0,t);
        k.KO(-1,t,"h");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 176
        k.KDC(0,t);
        k.KO(-1,t,"i");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_I /* 0x49 */)) {
      if(1){
        r=m=1;   // Line 176
        k.KDC(0,t);
        k.KO(-1,t,"i");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 167
        k.KDC(0,t);
        k.KO(-1,t,"j");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 167
        k.KDC(0,t);
        k.KO(-1,t,"j");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 168
        k.KDC(0,t);
        k.KO(-1,t,"k");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 168
        k.KDC(0,t);
        k.KO(-1,t,"k");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 169
        k.KDC(0,t);
        k.KO(-1,t,"l");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 169
        k.KDC(0,t);
        k.KO(-1,t,"l");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 153
        k.KDC(0,t);
        k.KO(-1,t,",");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 153
        k.KDC(0,t);
        k.KO(-1,t,",");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 154
        k.KDC(0,t);
        k.KO(-1,t,"n");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 154
        k.KDC(0,t);
        k.KO(-1,t,"n");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 175
        k.KDC(0,t);
        k.KO(-1,t,"o");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_O /* 0x4F */)) {
      if(1){
        r=m=1;   // Line 175
        k.KDC(0,t);
        k.KO(-1,t,"o");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 174
        k.KDC(0,t);
        k.KO(-1,t,"p");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 174
        k.KDC(0,t);
        k.KO(-1,t,"p");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 183
        k.KDC(0,t);
        k.KO(-1,t,"a");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 183
        k.KDC(0,t);
        k.KO(-1,t,"a");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 180
        k.KDC(0,t);
        k.KO(-1,t,"r");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_R /* 0x52 */)) {
      if(1){
        r=m=1;   // Line 180
        k.KDC(0,t);
        k.KO(-1,t,"r");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 162
        k.KDC(0,t);
        k.KO(-1,t,"s");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 162
        k.KDC(0,t);
        k.KO(-1,t,"s");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 179
        k.KDC(0,t);
        k.KO(-1,t,"t");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 179
        k.KDC(0,t);
        k.KO(-1,t,"t");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 177
        k.KDC(0,t);
        k.KO(-1,t,"u");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_U /* 0x55 */)) {
      if(1){
        r=m=1;   // Line 177
        k.KDC(0,t);
        k.KO(-1,t,"u");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4240 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 120
        k.KDC(0,t);
        k.KO(-1,t,"v");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4150 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 120
        k.KDC(0,t);
        k.KO(-1,t,"v");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 156
        k.KDC(0,t);
        k.KO(-1,t,"ɓ");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 156
        k.KDC(0,t);
        k.KO(-1,t,"ɓ");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4240 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 118
        k.KDC(0,t);
        k.KO(-1,t,"z");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4150 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 118
        k.KDC(0,t);
        k.KO(-1,t,"z");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 182
        k.KDC(0,t);
        k.KO(-1,t,"ɗ");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_W /* 0x57 */)) {
      if(1){
        r=m=1;   // Line 182
        k.KDC(0,t);
        k.KO(-1,t,"ɗ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4150 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 73
        k.KDC(0,t);
        k.KO(-1,t,"x");
      }
    }
    else if(k.KKM(e, modCodes.ALT | modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4240 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 73
        k.KDC(0,t);
        k.KO(-1,t,"x");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"ƴ");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 158
        k.KDC(0,t);
        k.KO(-1,t,"ƴ");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 178
        k.KDC(0,t);
        k.KO(-1,t,"y");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_Y /* 0x59 */)) {
      if(1){
        r=m=1;   // Line 178
        k.KDC(0,t);
        k.KO(-1,t,"y");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.CAPS | modCodes.VIRTUAL_KEY /* 0x4110 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"w");
      }
    }
    else if(k.KKM(e, modCodes.NO_CAPS | modCodes.VIRTUAL_KEY /* 0x4200 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 159
        k.KDC(0,t);
        k.KO(-1,t,"w");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 107
        k.KDC(0,t);
        k.KO(-1,t,"Ñ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_LBRKT /* 0xDB */)) {
      if(1){
        r=m=1;   // Line 121
        k.KDC(0,t);
        k.KO(-1,t,"Ɲ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_BKSLASH /* 0xDC */)) {
      if(1){
        r=m=1;   // Line 105
        k.KDC(0,t);
        k.KO(-1,t,"µ");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.ALT | modCodes.VIRTUAL_KEY /* 0x4050 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 74
        k.KDC(0,t);
        k.KO(-1,t,"£");
      }
    }
    else if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_RBRKT /* 0xDD */)) {
      if(1){
        r=m=1;   // Line 106
        k.KDC(0,t);
        k.KO(-1,t,"Ó");
      }
    }
    return r;
  };
}
