import { CloudEvent } from 'cloudevents'

const ce = new CloudEvent({
  id: 'x',
  source: 'x',
  type: "x",
})

console.log(ce)
