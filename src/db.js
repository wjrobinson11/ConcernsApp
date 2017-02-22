import uuid from 'uuid/v4'

export default {
  concerns: {
    'sa3ei32hr3ijbfewiuhof23iohudfihue4': {
      id: 'sa3ei32hr3ijbfewiuhof23iohudfihue4',
      description: "Nobody cares about this concern",
      importance: 0,
      timeSensitivity: 0,
      resolvedAt: null,
      createdAt: new Date()
    },
    'dsoijewiohtwhiulsdlhiugsahuiog43hiogerh': {
      id: 'dsoijewiohtwhiulsdlhiugsahuiog43hiogerh',
      description: "This one is really important... eventually...",
      importance: 3,
      timeSensitivity: 0,
      resolvedAt: null,
      createdAt: new Date()
    },
    'eijrw43h89er8h7gsrh895hiudsf4efer': {
      id: 'eijrw43h89er8h7gsrh895hiudsf4efer',
      description: "This one's not super important but needs an answer soon",
      importance: 0,
      timeSensitivity: 2,
      resolvedAt: null,
      createdAt: new Date()
    },
    'sdasdfggroiw34o94t3y934ty034gy9g349y7gre': {
      id: 'sdasdfggroiw34o94t3y934ty034gy9g349y7gre',
      description: "This one is urgent! It's important AND time-sensitive!",
      importance: 3,
      timeSensitivity: 3,
      resolvedAt: null,
      createdAt: new Date()
    },
    'jioep923f98yf23h89f23h8923hu9srhu9t5h89e5': {
      id: 'jioep923f98yf23h89f23h8923hu9srhu9t5h89e5',
      description: "Everything's gone to shit",
      importance: 1,
      timeSensitivity: 2,
      resolvedAt: null,
      createdAt: new Date()
    },
    '38934t9h834tu9seru89rse9u845j98fdh9834tj09': {
      id: '38934t9h834tu9seru89rse9u845j98fdh9834tj09',
      description: "Donald Trump is president",
      importance: 2,
      timeSensitivity: 0,
      resolvedAt: null,
      createdAt: new Date()
    },
  },

  create(tableName, attrs) {
    if (this[tableName] === undefined) {
      this[tableName] = {}
    }
    this[tableName][uuid()] = attrs
  }
}