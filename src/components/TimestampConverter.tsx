import React, { useState } from 'react';
import { Input, Button, Space, message, Card } from 'antd';
import { convertTimestamp, convertToTimestamp, isValidTimestamp, getCurrentTimestamp } from '../utils/timeUtils';

const TimestampConverter: React.FC = () => {
  const [timestamp, setTimestamp] = useState<string>('');
  const [dateTime, setDateTime] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleTimestampConvert = () => {
    const timestampNum = parseInt(timestamp);
    if (!isValidTimestamp(timestampNum)) {
      message.error('请输入有效的时间戳');
      return;
    }
    setResult(convertTimestamp(timestampNum));
  };

  const handleDateTimeConvert = () => {
    try {
      const timestamp = convertToTimestamp(dateTime);
      setResult(timestamp.toString());
    } catch (error) {
      message.error('请输入有效的日期时间格式 (YYYY-MM-DD HH:mm:ss)');
    }
  };

  const handleGetCurrentTimestamp = () => {
    setTimestamp(getCurrentTimestamp().toString());
  };

  return (
    <Card title="抖音视频时间戳转换" style={{ width: '100%' }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Space>
          <Input
            placeholder="输入时间戳"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            style={{ width: 200 }}
          />
          <Button type="primary" onClick={handleTimestampConvert}>
            转换为日期时间
          </Button>
          <Button onClick={handleGetCurrentTimestamp}>
            获取当前时间戳
          </Button>
        </Space>

        <Space>
          <Input
            placeholder="输入日期时间 (YYYY-MM-DD HH:mm:ss)"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            style={{ width: 200 }}
          />
          <Button type="primary" onClick={handleDateTimeConvert}>
            转换为时间戳
          </Button>
        </Space>

        {result && (
          <Card type="inner" title="转换结果">
            {result}
          </Card>
        )}
      </Space>
    </Card>
  );
};

export default TimestampConverter; 