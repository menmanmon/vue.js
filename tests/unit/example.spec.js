import { mount } from '@vue/test-utils'
import Calculator from '@/components/Calculator'

describe('Тест калькуляторв', () => {
  let wrapper

  const createComponent = () => {
    wrapper = mount(Calculator)
  }

  const findButtonByText = (text) =>
    wrapper.findAll('button').wrappers.find(w => {
      return w.text() === text
    })
  const findLabelText = (text) => {
    return wrapper.findAll('label').wrappers.find(w => {
      return w.text() === text
    })
  }

  afterEach(() => {
    wrapper.destroy()
  })

  it('Ввод данных', () => {
    createComponent()
    const operand1Input = wrapper.find('input[name=operand1]')
    operand1Input.setValue(10)
    expect(wrapper.vm.operand1).toBe(10)
  })

  it('Клавиатура показана', async () => {
    createComponent()
    expect(wrapper.vm.checked).toBe(true)
  })
  it('Клавиатура скрыта', async () => {
    createComponent()
    await findLabelText('Отобразить экранную клавиатуру').trigger('click')
    expect(wrapper.vm.checked).toBe(false)
  })
  it('Удаление символа', async () => {
    createComponent()
    await findButtonByText("3").trigger('click')
    await findButtonByText("1").trigger('click')
    await findButtonByText('←').trigger('click')
    expect(wrapper.vm.operand1).toBe('3')
  })

  it.each`
  firstNumber | secondNumber | operator  | expectedResult
  ${'8'} | ${'3'} | ${'+'} | ${11}
  ${'5'} | ${'2'} | ${'-'} | ${3}
  ${'3'} | ${'4'} | ${'*'} | ${12}
  ${'9'} | ${'3'} | ${'/'} | ${3}
  `('Проверка оператора "$operator" с числами $firstNumber и $secondNumber',
    async ({ firstNumber, secondNumber, operator, expectedResult }) => {
      createComponent()
      await findLabelText('Операнд 1').trigger('click')
      await findButtonByText(firstNumber).trigger('click')
      await findLabelText('Операнд 2').trigger('click')
      await findButtonByText(secondNumber).trigger('click')

      await findButtonByText(operator).trigger('click')
      expect(wrapper.vm.result).toBe(expectedResult)
    })
})