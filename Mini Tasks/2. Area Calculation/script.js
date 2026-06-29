const shapeSelect = document.getElementById('shape')
const inputsForm = document.getElementById('inputs')
const calculateBtn = document.getElementById('calculate')
const resetBtn = document.getElementById('reset')
const resultDiv = document.getElementById('result')

function createField(id, label, placeholder=''){
    const wrapper = document.createElement('div')
    wrapper.className = 'field'

    const lbl = document.createElement('label')
    lbl.htmlFor = id        // htmlFor attribute links the label to the input field
    lbl.textContent = label // set the text of the label

    const input = document.createElement('input')
    input.type = 'number'
    input.step = 'any'
    input.id = id
    input.placeholder = placeholder

    wrapper.appendChild(lbl)
    wrapper.appendChild(input)
    return wrapper
}

function renderInputs(shape){
  inputsForm.innerHTML = ''
  if(shape === 'rectangle'){
    inputsForm.appendChild(createField('width','Width'))
    inputsForm.appendChild(createField('height','Height'))
  } else if(shape === 'square'){
    inputsForm.appendChild(createField('side','Side length'))
  } else if(shape === 'circle'){
    inputsForm.appendChild(createField('radius','Radius'))
  } else if(shape === 'triangle'){
    inputsForm.appendChild(createField('base','Base'))
    inputsForm.appendChild(createField('triHeight','Height'))
  } else if(shape === 'parallelogram'){
    inputsForm.appendChild(createField('baseP','Base'))
    inputsForm.appendChild(createField('heightP','Height'))
  } else if(shape === 'trapezoid'){
    inputsForm.appendChild(createField('base1','Base 1'))
    inputsForm.appendChild(createField('base2','Base 2'))
    inputsForm.appendChild(createField('trapHeight','Height'))
  }
}

function getNumber(id){
  const el = document.getElementById(id)
  if(!el) return NaN
  return parseFloat(el.value)
}

function calculate(){
  const shape = shapeSelect.value
  let area = NaN
  if(shape === 'rectangle'){
    const w = getNumber('width')
    const h = getNumber('height')
    area = w * h
  } else if(shape === 'square'){
    const s = getNumber('side')
    area = s * s
  } else if(shape === 'circle'){
    const r = getNumber('radius')
    area = Math.PI * r * r
  } else if(shape === 'triangle'){
    const b = getNumber('base')
    const h = getNumber('triHeight')
    area = 0.5 * b * h
  } else if(shape === 'parallelogram'){
    const b = getNumber('baseP')
    const h = getNumber('heightP')
    area = b * h
  } else if(shape === 'trapezoid'){
    const a = getNumber('base1')
    const b = getNumber('base2')
    const h = getNumber('trapHeight')
    area = 0.5 * (a + b) * h
  }

  if(!isFinite(area) || isNaN(area)){
    resultDiv.textContent = 'Please enter valid numeric values for all required fields.'
    return
  }

  resultDiv.textContent = 'Area: ' + Number(area.toFixed(2)) + ' square units'
}

shapeSelect.addEventListener('change', function(){ renderInputs(shapeSelect.value) })
calculateBtn.addEventListener('click', function(e){ e.preventDefault(); calculate() })
resetBtn.addEventListener('click', function(){
  inputsForm.reset()
  resultDiv.textContent = 'Result will appear here'
})

renderInputs(shapeSelect.value)