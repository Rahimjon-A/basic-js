const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!')

    return this.process(message, key, 'encrypt')
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!')

    return this.process(encryptedMessage, key, 'decrypt')
  }

  process(text, key, mode) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    text = text.toUpperCase()
    key = key.toUpperCase()

    let result = ''
    let keyIndex = 0

    for (let i = 0; i < text.length; i++) {
      const char = text[i]
      if (alphabet.includes(char)) {
        const shift = alphabet.indexOf(key[keyIndex % key.length])
        const charIndex = alphabet.indexOf(char)

        let newIndex = mode === 'encrypt' ? (charIndex + shift) % 26 : (charIndex - shift + 26) % 26

        result += alphabet[newIndex]
        keyIndex++
      } else {
        result += char // Keep special characters unchanged
      }
    }

    return this.direct ? result : result.split('').reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine,
}
