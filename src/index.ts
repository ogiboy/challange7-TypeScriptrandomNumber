console.log('index.ts is working!')

namespace random20Number {
  /*
    TypeScript'te class nedir?
    nums = [5,7,9,1,4,8]
    1 ile 10 arasında rastgele 20 adet sayı üret
    1-)bu sayılardan verilen dizi içersinde olmayanların listesi
    2-)bu sayılardan verilen dizi içerisinde olanların listesi
    */

  // TypeScript'te class nesnelerin özelliklerini ve metodlarını tanımlamak için kullanılır.

  class NumberGenerator {
    // private nums: number[] = [5, 7, 9, 1, 4, 8]
    private randomNumbers: number[] = []

    generateRandomNumbers(): number[] {
      this.randomNumbers = []

      while (this.randomNumbers.length < 20) {
        const number = Math.floor(Math.random() * 10) + 1

        this.randomNumbers.push(number)
      }
      return this.randomNumbers
    }

    getMissingNumbers(): number[] {
      const missingNumbers: number[] = []

      for (let i = 1; i <= 20; i++) {
        if (!this.randomNumbers.includes(i)) {
          missingNumbers.push(i)
        }
      }
      return missingNumbers
    }

    getIncludedNumbers(): number[] {
      const includedNumbers: number[] = []

      for (let i = 0; i < this.randomNumbers.length; i++) {
        if (this.randomNumbers[i] >= 1 && this.randomNumbers[i] <= 10) {
          includedNumbers.push(this.randomNumbers[i])
        }
      }
      return includedNumbers
    }
  }

  const generator = new NumberGenerator()

  const randomNumbers = generator.generateRandomNumbers()
  console.log('randoms: ' + randomNumbers)

  const missingNumbers = generator.getMissingNumbers()
  console.log('missing: ' + missingNumbers)

  const includedNumbers = generator.getIncludedNumbers()
  console.log('included: ' + includedNumbers)
}
