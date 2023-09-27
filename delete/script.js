
const IDEAL = "ideal";
const GOOD_CHANCE = "good chance";
const ONE_SIDED = "one sided";
const NOT_IDEAL = "not ideal";
const UH_OH = "uh-oh";

const mbti = {
  "infp": {"infp": GOOD_CHANCE, "enfp": GOOD_CHANCE,"infj": GOOD_CHANCE, "enfj": IDEAL,
          "intj": GOOD_CHANCE, "entj": IDEAL, "intp": GOOD_CHANCE, "entp": GOOD_CHANCE,
          "isfp": UH_OH, "esfp": UH_OH, "istp": UH_OH, "estp": UH_OH,
          "isfj": UH_OH, "esfj": UH_OH, "istj": UH_OH, "estj": UH_OH},
  "enfp": {"infp": GOOD_CHANCE, "enfp": GOOD_CHANCE, "infj": IDEAL, "enfj": GOOD_CHANCE,
          "intj": IDEAL, "entj": GOOD_CHANCE, "intp": GOOD_CHANCE, "entp": GOOD_CHANCE,
          "isfp": UH_OH, "esfp": UH_OH, "istp": UH_OH, "estp": UH_OH,
          "isfj": UH_OH, "esfj": UH_OH, "istj": UH_OH, "estj": UH_OH},
  "infj": {"infp": GOOD_CHANCE, "enfp": IDEAL, "infj": GOOD_CHANCE, "enfj": GOOD_CHANCE,
          "intj": GOOD_CHANCE, "entj": GOOD_CHANCE, "intp": GOOD_CHANCE, "entp": IDEAL,
          "isfp": UH_OH, "esfp": UH_OH, "istp": UH_OH, "estp": UH_OH,
          "isfj": UH_OH, "esfj": UH_OH, "istj": UH_OH, "estj": UH_OH}, 
  "enfj": {"infp": IDEAL, "enfp": GOOD_CHANCE, "infj": GOOD_CHANCE, "enfj": GOOD_CHANCE,
          "intj": GOOD_CHANCE, "entj": GOOD_CHANCE, "intp": GOOD_CHANCE, "entp": GOOD_CHANCE,
          "isfp": IDEAL, "esfp": UH_OH, "istp": UH_OH, "estp": UH_OH,
          "isfj": UH_OH, "esfj": UH_OH, "istj": UH_OH, "estj": UH_OH},
  "intj": {"infp": GOOD_CHANCE, "enfp": IDEAL, "infj": GOOD_CHANCE, "enfj": GOOD_CHANCE,
          "intj": GOOD_CHANCE, "entj": GOOD_CHANCE, "intp": GOOD_CHANCE, "entp": IDEAL,
          "isfp": ONE_SIDED, "esfp": ONE_SIDED, "istp": ONE_SIDED, "estp": ONE_SIDED,
          "isfj": NOT_IDEAL, "esfj": NOT_IDEAL, "istj": NOT_IDEAL, "estj": NOT_IDEAL},
  "entj": {"infp": IDEAL, "enfp": GOOD_CHANCE, "infj": GOOD_CHANCE,  "enfj": GOOD_CHANCE,
          "intj": GOOD_CHANCE, "entj": GOOD_CHANCE, "intp": IDEAL, "entp": GOOD_CHANCE,
          "isfp": ONE_SIDED, "esfp": ONE_SIDED, "istp": ONE_SIDED, "estp": ONE_SIDED,
          "isfj": ONE_SIDED, "esfj": ONE_SIDED, "istj": ONE_SIDED, "estj": ONE_SIDED},
  "intp": {"infp": GOOD_CHANCE, "enfp": GOOD_CHANCE, "infj": GOOD_CHANCE, "enfj": GOOD_CHANCE,
          "intj": GOOD_CHANCE, "entj": IDEAL, "intp": GOOD_CHANCE, "entp": GOOD_CHANCE,
          "isfp": ONE_SIDED, "esfp": ONE_SIDED, "istp": ONE_SIDED, "estp": ONE_SIDED,
          "isfj": NOT_IDEAL, "esfj": NOT_IDEAL, "istj": NOT_IDEAL, "estj": IDEAL},
  "entp": {"infp": GOOD_CHANCE, "enfp": GOOD_CHANCE, "infj": IDEAL, "enfj": GOOD_CHANCE,
          "intj": IDEAL, "entj": GOOD_CHANCE, "intp": GOOD_CHANCE, "entp": GOOD_CHANCE,
          "isfp": ONE_SIDED, "esfp": ONE_SIDED, "istp": ONE_SIDED, "estp": ONE_SIDED,
          "isfj": NOT_IDEAL, "esfj": NOT_IDEAL, "istj": NOT_IDEAL, "estj": NOT_IDEAL},
  "isfp": {"infp": UH_OH, "enfp": UH_OH, "infj": UH_OH, "enfj": IDEAL,
          "intj": ONE_SIDED, "entj": ONE_SIDED, "intp": ONE_SIDED, "entp": ONE_SIDED,
          "isfp": NOT_IDEAL, "esfp": NOT_IDEAL, "istp": NOT_IDEAL, "estp": NOT_IDEAL,
          "isfj": ONE_SIDED, "esfj": IDEAL, "istj": ONE_SIDED, "estj": IDEAL},
  "esfp": {"infp": UH_OH, "enfp": UH_OH, "infj": UH_OH, "enfj": UH_OH,
          "intj": ONE_SIDED, "entj": ONE_SIDED, "intp": ONE_SIDED, "entp": ONE_SIDED,
          "isfp": NOT_IDEAL, "esfp": NOT_IDEAL, "istp": NOT_IDEAL, "estp": NOT_IDEAL,
          "isfj": IDEAL, "esfj": ONE_SIDED, "istj": IDEAL, "estj": ONE_SIDED},
  "istp": {"infp": UH_OH, "enfp": UH_OH, "infj": UH_OH, "enfj": UH_OH,
          "intj": ONE_SIDED, "entj": ONE_SIDED, "intp": ONE_SIDED, "entp": ONE_SIDED,
          "isfp": NOT_IDEAL, "esfp": NOT_IDEAL, "istp": NOT_IDEAL, "estp": NOT_IDEAL,
          "isfj": ONE_SIDED, "esfj": IDEAL, "istj": ONE_SIDED, "estj": IDEAL},
  "estp": {"infp": UH_OH, "enfp": UH_OH, "infj": UH_OH, "enfj": UH_OH,
          "intj": ONE_SIDED, "entj": ONE_SIDED, "intp": ONE_SIDED, "entp": ONE_SIDED,
          "isfp": NOT_IDEAL, "esfp": NOT_IDEAL, "istp": NOT_IDEAL, "estp": NOT_IDEAL,
          "isfj": IDEAL, "esfj": ONE_SIDED, "istj": IDEAL, "estj": ONE_SIDED},
  "isfj": {"infp": UH_OH, "enfp": UH_OH, "infj": UH_OH, "enfj": UH_OH,
          "intj": NOT_IDEAL, "entj": ONE_SIDED, "intp": NOT_IDEAL, "entp": NOT_IDEAL,
          "isfp": ONE_SIDED, "esfp": IDEAL, "istp": ONE_SIDED, "estp": IDEAL,
          "isfj": GOOD_CHANCE, "esfj": GOOD_CHANCE, "istj": GOOD_CHANCE, "estj": GOOD_CHANCE},
  "esfj": {"infp": UH_OH, "enfp": UH_OH, "infj": UH_OH, "enfj": UH_OH,
          "intj": NOT_IDEAL, "entj": ONE_SIDED, "intp": NOT_IDEAL, "entp": NOT_IDEAL,
          "isfp": IDEAL, "esfp": ONE_SIDED, "istp": IDEAL, "estp": ONE_SIDED,
          "isfj": GOOD_CHANCE, "esfj": GOOD_CHANCE, "istj": GOOD_CHANCE, "estj": GOOD_CHANCE},
  "istj": {"infp": UH_OH, "enfp": UH_OH, "infj": UH_OH, "enfj": UH_OH,
          "intj": NOT_IDEAL, "entj": ONE_SIDED, "intp": NOT_IDEAL, "entp": NOT_IDEAL,
          "isfp": ONE_SIDED, "esfp": IDEAL, "istp": ONE_SIDED, "estp": IDEAL,
          "isfj": GOOD_CHANCE, "esfj": GOOD_CHANCE, "istj": GOOD_CHANCE, "estj": GOOD_CHANCE},
  "estj": {"infp": UH_OH, "enfp": UH_OH, "infj": UH_OH, "enfj": UH_OH,
          "intj": NOT_IDEAL, "entj": ONE_SIDED, "intp": IDEAL, "entp": NOT_IDEAL,
          "isfp": IDEAL, "esfp": ONE_SIDED, "istp": IDEAL, "estp": ONE_SIDED,
          "isfj": GOOD_CHANCE, "esfj": GOOD_CHANCE, "istj": GOOD_CHANCE, "estj": GOOD_CHANCE}
};


function submit() {
    
  n1 = document.getElementById('n1');
  n2 = document.getElementById('n2');
  mbti1 = document.getElementById('mbti1');
  mbti2 = document.getElementById('mbti2');

  //alert(mbti1.value.toUpperCase() + " " + mbti2.value.toUpperCase() + ": " + mbti[mbti1.value.toLowerCase()][mbti2.value.toLowerCase()]);

  let result = mbti[mbti1.value.toLowerCase()][mbti2.value.toLowerCase()];

  if (result === IDEAL) {
        result = 'blue';
  } else if (result === GOOD_CHANCE) {
        result = 'dark-green';
  } else if (result === ONE_SIDED) {
        result = 'light-green';
  } else if (result === NOT_IDEAL) {
        result = 'yellow';
  } else {
        result = 'red';
  }

  document.getElementById('home').style.display = 'none';

  for (let i = 0; i < document.getElementsByClassName("names").length; i++) {
        document.getElementsByClassName("names")[i].innerHTML = n1.value.toUpperCase() + " + " + n2.value.toUpperCase();
  } 

  for (let i = 0; i < document.getElementsByClassName("mbtis").length; i++) {
        document.getElementsByClassName("mbtis")[i].innerHTML = mbti1.value.toUpperCase() + " + " + mbti2.value.toUpperCase()
  }
  //document.getElementsByClassName("name-mbti").innerHTML = "New text!";
  document.getElementById(result).style.display = 'block';
  //document.getElementById('red').style.display='block';
  //document.body.style.backgroundColor = 'green';
  //document.body.style.display = 'block';

  return false;
}