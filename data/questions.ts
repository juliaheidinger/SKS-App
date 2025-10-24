
import type { Question, CategoryId } from '../types';

export const questions: Record<CategoryId, Question[]> = {
  navigation: [
    {
      question: 'Was ist die Missweisung (Variation)?',
      options: [
        'Der Winkel zwischen rechtweisend Nord und missweisend Nord.',
        'Der Winkel zwischen magnetisch Nord und rechtweisend Nord.',
        'Der Fehler des Kompasses durch bordeigene Magnetfelder.',
        'Die Abweichung durch Wind und Strömung.',
      ],
      correctAnswerIndex: 0,
    },
    {
      question: 'Welche Farbe hat eine Lateraltonne an der Steuerbordseite einer Fahrrinne in der Region A, wenn man von See kommt?',
      options: [
        'Rot',
        'Grün',
        'Schwarz-Gelb',
        'Rot-Weiß',
      ],
      correctAnswerIndex: 1,
    },
    {
      question: 'Was bedeutet die Abkürzung "KdW" in der Navigation?',
      options: [
        'Kurs durchs Wasser',
        'Kurs der Welle',
        'Kiel-delta-Winkel',
        'Kein definierter Wegpunkt',
      ],
      correctAnswerIndex: 0,
    }
  ],
  seamanship: [
    {
      question: 'Welcher Knoten eignet sich zum Verbinden zweier gleich starker Leinen?',
      options: [
        'Palstek',
        'Achtknoten',
        'Kreuzknoten',
        'Webeleinstek',
      ],
      correctAnswerIndex: 2,
    },
    {
      question: 'Was ist eine "Patenthalse"?',
      options: [
        'Eine besonders schnell und gut ausgeführte Halse.',
        'Eine unfreiwillige, unkontrollierte Halse bei achterlichem Wind.',
        'Ein geschütztes Manöver, das nur mit Lizenz gefahren werden darf.',
        'Eine Halse mit nur einer Person an Deck.',
      ],
      correctAnswerIndex: 1,
    },
     {
      question: 'Welche Funktion hat ein "Bullentalje"?',
      options: [
        'Es dient zum Heben schwerer Lasten an Bord.',
        'Es sichert den Großbaum bei achterlichen Winden gegen eine Patenthalse.',
        'Es ist Teil der Ruderanlage.',
        'Es wird zur Befestigung des Ankers verwendet.',
      ],
      correctAnswerIndex: 1,
    }
  ],
  law: [
    {
      question: 'Ein Maschinenfahrzeug sieht ein Segelfahrzeug von Steuerbord, es besteht die Gefahr eines Zusammenstoßes. Wer ist ausweichpflichtig?',
      options: [
        'Das Maschinenfahrzeug',
        'Das Segelfahrzeug',
        'Beide müssen nach Steuerbord ausweichen',
        'Das schnellere Fahrzeug',
      ],
      correctAnswerIndex: 0,
    },
    {
      question: 'Welches Schallsignal gibt ein Fahrzeug von mehr als 12m Länge bei verminderter Sicht ab?',
      options: [
        'Einen langen Ton alle 2 Minuten',
        'Zwei lange Töne alle 2 Minuten',
        'Einen kurzen, einen langen, einen kurzen Ton',
        'Schnelles Läuten der Glocke für 5 Sekunden',
      ],
      correctAnswerIndex: 0,
    },
    {
      question: 'Was bedeutet ein einzelnes, weißes Rundumlicht auf See?',
      options: [
        'Ein Fahrzeug unter 50m Länge in Fahrt',
        'Ein Ankerlieger unter 50m Länge',
        'Ein manövrierunfähiges Fahrzeug',
        'Ein Fischerboot bei der Arbeit',
      ],
      correctAnswerIndex: 1,
    }
  ],
  weather: [
    {
      question: 'Was ist eine "Isobare"?',
      options: [
        'Eine Linie gleicher Temperatur',
        'Eine Linie gleicher Windgeschwindigkeit',
        'Eine Linie gleichen Luftdrucks',
        'Eine Linie gleicher Luftfeuchtigkeit',
      ],
      correctAnswerIndex: 2,
    },
    {
      question: 'Welche Wolkenart kündigt typischerweise eine Kaltfront an?',
      options: [
        'Cirrus',
        'Cumulonimbus',
        'Stratus',
        'Altostratus',
      ],
      correctAnswerIndex: 1,
    },
    {
      question: 'Wie dreht der Wind auf der Nordhalbkugel bei Durchzug eines Tiefdruckgebiets typischerweise?',
      options: [
        'Rechtsdrehend (im Uhrzeigersinn)',
        'Linksdrehend (gegen den Uhrzeigersinn)',
        'Er bleibt konstant',
        'Er flaut vollständig ab',
      ],
      correctAnswerIndex: 1,
    }
  ],
};
