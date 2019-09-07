window.onload = main;

function main() {
    var paragraf = document.getElementsByTagName("p")[0],
        h2 = document.getElementsByTagName("h2")[0],
        ch = new CharHendler(paragraf.innerHTML),
        ch2 = new CharHendler(h2.innerHTML);

    ch.splitText(" ");
    ch.coverTag();

    ch2.splitText(" ");
    ch2.coverTag();

    paragraf.innerHTML = ch.getText();
    h2.innerHTML = ch2.getText();

    var spansH2 = h2.getElementsByTagName("span");
    for (let i = 0; i < spansH2.length; i++) {
        spansH2[i].addEventListener('mouseenter', function() {
            this.style.color = getColor();
        })
    }
}

function getColor() {
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += Math.round(Math.random() * 15).toString(16);
    }
    return color;
}

function CharHendler(text) {
    var text = text;
    var words;

    this.splitText = function(reg) {
        words = text.split('<br>');
        words = trimWords(words).join(' <br> ').split(reg);
        return words;
    };

    this.coverTag = function () {
        for (key in words) {
            if (words[key] != '<br>') {
                words[key] = '<span>' + words[key] + '</span>';
            }
        }
        text = words.join(' ');
    }


    var trimWords = function (words) {
        for (key in words) {
            words[key] = words[key].trim();
        }
        return words;
    };

    this.showWords = function() {
        var i = 1;
        for (key of words) {
            console.log(key);
            i++;
        }
    };

    this.myTrim = function (str) {
        return str.trim();
    }

    this.getText = function () {
        return text;
    };

    this.setText = function(mytext) {
        text = mytext;
    };
}