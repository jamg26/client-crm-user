import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../../../../../services/products.service';
import { Select, Card, InputNumber, Row, Col } from 'antd';

const SelectProductForm = (props) => {
  const { Option } = Select;
  useEffect(() => {
    const products = async () => {
      const prods = await getProducts(props.business.id);
      console.log(prods);
    };
    products();
  }, []);

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <div>
      <Card className='mb-2'>
        <Row>
          <Col>
            <Select placeholder='Select Product' onChange={handleChange}>
              <Option value='1'>1</Option>
              <Option value='2'>2</Option>
            </Select>
          </Col>
          <Col push={1}>
            Count: <InputNumber defaultValue={0} />
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
