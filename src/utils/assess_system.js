import _ from 'lodash'

const data = {
  root: {
    data: {
      text: '评估指标体系'
    },
    children: [
      {
        data: {
          id: '1',
          text: '决策'
        },
        children: [
          {
            data: {
              id: '4',
              text: '备案流程'
            },
            children: [
              {
                data: {
                  id: '12',
                  text: '备案依据充分性'
                }
              },
              {
                data: {
                  id: '13',
                  text: '备案标准明确性'
                }
              }
            ]
          },
          {
            data: {
              id: '5',
              text: '产出目标'
            },
            children: [
              {
                data: {
                  id: '14',
                  text: '目标设定积极性'
                }
              },
              {
                data: {
                  id: '15',
                  text: '收效设定明确性'
                }
              }
            ]
          }
        ]
      },
      {
        data: {
          id: '2',
          text: '管理'
        },
        children: [
          {
            data: {
              id: '6',
              text: '流程执行'
            },
            children: [
              {
                data: {
                  id: '16',
                  text: '备案程序规范性'
                }
              },
              {
                data: {
                  id: '17',
                  text: '备案流程时效性'
                }
              }
            ]
          },
          {
            data: {
              id: '7',
              text: '信息统计与报送'
            },
            children: [
              {
                data: {
                  id: '18',
                  text: '信息统计规范性'
                }
              },
              {
                data: {
                  id: '19',
                  text: '报送执行定期性'
                }
              }
            ]
          },
          {
            data: {
              id: '8',
              text: '监督检查'
            },
            children: [
              {
                data: {
                  id: '20',
                  text: '监督检查制度健全性'
                }
              },
              {
                data: {
                  id: '21',
                  text: '备案单位自查执行有效性'
                }
              },
              {
                data: {
                  id: '22',
                  text: '现场调查核实执行有效性'
                }
              }
            ]
          }
        ]
      },
      {
        data: {
          id: '3',
          text: '效益'
        },
        children: [
          {
            data: {
              id: '9',
              text: '实施效率'
            },
            children: [
              {
                data: {
                  id: '23',
                  text: '政策优惠性'
                }
              },
              {
                data: {
                  id: '24',
                  text: '信息交流通畅性'
                }
              },
              {
                data: {
                  id: '25',
                  text: '办事程序便捷性'
                }
              }
            ]
          },
          {
            data: {
              id: '10',
              text: '溢出效益'
            },
            children: [
              {
                data: {
                  id: '26',
                  text: '政治效益'
                }
              },
              {
                data: {
                  id: '27',
                  text: '经济效益'
                }
              },
              {
                data: {
                  id: '28',
                  text: '社会效益'
                }
              },
              {
                data: {
                  id: '29',
                  text: '技术效益'
                }
              }
            ]
          },
          {
            data: {
              id: '11',
              text: '单位效益'
            },
            children: [
              {
                data: {
                  id: '30',
                  text: '优势'
                }
              },
              {
                data: {
                  id: '31',
                  text: '持久性'
                }
              }
            ]
          }
        ]
      }
    ]
  },
  template: 'right'
}

const nodes = []

const defaultNode = {
  id: '',
  index: '',
  name: '',
  layer: 0,
  weight1: 0.0,
  weight2: 0.0,
  result: 1
}

function buildNodes(node, layer) {
  if (layer !== 0) {
    const tmpNode = _.cloneDeep(defaultNode)
    tmpNode.id = node.data.id
    tmpNode.name = node.data.text
    tmpNode.layer = layer
    nodes.push(tmpNode)
  }
  if (node.children !== null) {
    _.forEach(node.children, (x) => {
      buildNodes(x, layer + 1)
    })
  }
}

buildNodes(data.root, 0)

const scoreTree = [
  {
    id: '1',
    score: 0.0,
    layer: 1,
    label: '决策',
    children: [
      {
        id: '4',
        score: 0.0,
        layer: 2,
        label: '备案流程',
        children: [
          {
            id: '12',
            layer: 3,
            score: 0.0,
            label: '备案依据充分性'
          },
          {
            id: '13',
            layer: 3,
            score: 0.0,
            label: '备案标准明确性'
          }
        ]
      },
      {
        id: '5',
        score: 0.0,
        layer: 2,
        label: '产出目标',
        children: [
          {
            id: '14',
            layer: 3,
            score: 0.0,
            label: '目标设定积极性'
          },
          {
            id: '15',
            layer: 3,
            score: 0.0,
            label: '收效设定明确性'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    layer: 1,
    score: 0.0,
    label: '管理',
    children: [
      {
        id: '6',
        layer: 2,
        score: 0.0,
        label: '流程执行',
        children: [
          {
            id: '16',
            layer: 3,
            score: 0.0,
            label: '备案程序规范性'
          },
          {
            id: '17',
            layer: 3,
            score: 0.0,
            label: '备案流程时效性'
          }
        ]
      },
      {
        id: '7',
        layer: 2,
        score: 0.0,
        label: '信息统计与报送',
        children: [
          {
            id: '18',
            layer: 3,
            score: 0.0,
            label: '信息统计规范性'
          },
          {
            id: '19',
            layer: 3,
            score: 0.0,
            label: '报送执行定期性'
          }
        ]
      },
      {
        id: '8',
        layer: 2,
        score: 0.0,
        label: '监督检查',
        children: [
          {
            id: '20',
            layer: 3,
            score: 0.0,
            label: '监督检查制度健全性'
          },
          {
            id: '21',
            layer: 3,
            score: 0.0,
            label: '备案单位自查执行有效性'
          },
          {
            id: '22',
            layer: 3,
            score: 0.0,
            label: '现场调查核实执行有效性'
          }
        ]
      }
    ]
  },
  {
    id: '3',
    layer: 1,
    score: 0.0,
    label: '效益',
    children: [
      {
        id: '9',
        layer: 2,
        score: 0.0,
        label: '实施效率',
        children: [
          {
            id: '23',
            layer: 3,
            score: 0.0,
            label: '政策优惠性'
          },
          {
            id: '24',
            layer: 3,
            score: 0.0,
            label: '信息交流通畅性'
          },
          {
            id: '25',
            layer: 3,
            score: 0.0,
            label: '办事程序便捷性'
          }
        ]
      },
      {
        id: '10',
        layer: 2,
        score: 0.0,
        label: '溢出效益',
        children: [
          {
            id: '26',
            layer: 3,
            score: 0.0,
            label: '政治效益'
          },
          {
            id: '27',
            layer: 3,
            score: 0.0,
            label: '经济效益'
          },
          {
            id: '28',
            layer: 3,
            score: 0.0,
            label: '社会效益'
          },
          {
            id: '29',
            layer: 3,
            score: 0.0,
            label: '技术效益'
          }
        ]
      },
      {
        id: '11',
        layer: 2,
        score: 0.0,
        label: '单位效益',
        children: [
          {
            id: '30',
            layer: 3,
            score: 0.0,
            label: '优势'
          },
          {
            id: '31',
            layer: 3,
            score: 0.0,
            label: '持久性'
          }
        ]
      }
    ]
  }
]

export { data, scoreTree, nodes }
