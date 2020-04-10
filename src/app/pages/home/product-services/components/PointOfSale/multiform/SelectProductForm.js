import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../../../../../services/products.service';
import { Select, Card, InputNumber, Row, Col } from 'antd';

const SelectProductForm = (props) => {
  const [products, setProducts] = useState([]);
  const { Option } = Select;
  useEffect(() => {
    const products = async () => {
      const prods = await getProducts(props.business.id);
      setProducts(prods.data);
    };
    products();
  }, []);

  const handleChange = (value) => {
    props.setState({
      ...props.state,
      productKey: value,
      businessKey: props.business.id,
    });
    console.log(value);
  };

  const handleCountChange = (e) => {
    props.setState({
      ...props.state,
      count: e,
    });
  };

  return (
    <div>
      <Card className='mb-2'>
        <Row>
          <Col>
            <Select placeholder='Select Product' onChange={handleChange}>
              {products.map((data) => {
                return <Option value={data.id}>{data.productName}</Option>;
              })}
            </Select>
          </Col>
          <Col push={1}>
            Count: <InputNumber defaultValue={0} onChange={handleCountChange} />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    business: state.auth.user.mainRole.business,
  };
};
export default connect(mapStateToProps)(SelectProductForm);
