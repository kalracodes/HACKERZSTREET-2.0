import { ResponsiveContainer, PieChart, Pie } from 'recharts';

export function Dashgraphp() {
  const datax = [
    { name: 'T shirt', value: 23, fill: '#0088fe' },
    { name: 'Shirt', value: 25, fill: '#00c49f' },
    { name: 'Trouser', value: 17, fill: '#00049f' },
    // { name: "Fuel", value: 22, fill: "#ff0000" },
    { name: 'Jeans', value: 17, fill: '#ff8042' },
    { name: 'Jacket', value: 18, fill: '#8884d8' },
    { name: 'Socks', value: 18, fill: '#ac2195' },
    { name: 'Shrug', value: 18, fill: '#8824d8' },
  ];

  return (
    <>
      <div className='dashgraphbarcont' style={{marginTop:'2rem'}}>
        <h2 className='dashgraph__header'>Product related Emissions</h2>
        <div className='dashgraphbar__cont'>
          <ResponsiveContainer width='100%' height='100%'>
            <PieChart height={250}>
              <Pie
                data={datax}
                cx='50%'
                cy='50%'
                isAnimationActive='1'
                outerRadius={100}
                fill='#8884d8'
                dataKey='value'
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  value,
                  index,
                }) => {
                  console.log('handling label?');
                  const RADIAN = Math.PI / 180;
                  const radius = 25 + innerRadius + (outerRadius - innerRadius);
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);
                  return (
                    <text
                      x={x}
                      y={y}
                      textAnchor={x > cx ? 'start' : 'end'}
                      dominantBaseline='central'
                    >
                      {datax[index].name} ({value})
                    </text>
                  );
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
