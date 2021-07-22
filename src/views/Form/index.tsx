import { defineComponent, reactive, toRaw, UnwrapRef } from 'vue';
import {
  TypographyTitle,
  Typography,
  TypographyParagraph,
  Form,
  FormItem,
  Input,
  Select,
  SelectOption,
  Button,
  DatePicker,
  Switch,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio
} from 'ant-design-vue';
import './index.less';

import FeCard from '@/components/Card';

interface FormState {
  name: string;
  region: string | undefined;
  date1: any;
  delivery: boolean;
  type: string[];
  resource: string;
  desc: string;
}

const fcp = 'form-base';

const Header = () => (
  <Typography class={`${fcp}-header`}>
    <TypographyTitle level={4}>基础表单</TypographyTitle>
    <TypographyParagraph>
      表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。
    </TypographyParagraph>
  </Typography>
);

const Body = defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      name: '',
      region: undefined,
      date1: undefined,
      delivery: false,
      type: [],
      resource: '',
      desc: ''
    });
    const onSubmit = () => {
      console.log('submit!', toRaw(formState));
    };

    return () => (
      <div class={`${fcp}-body view-space`}>
        <FeCard>
          <div class={`${fcp}-body-wrapper`}>
            <Form model={formState} labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
              <FormItem label="名称">
                <Input
                  value={formState.name}
                  onChange={(e) => (formState.name = e.target.value)}
                />
              </FormItem>
              {/* <FormItem label="Activity zone">
          <Select
            value={formState.region}
            onChange={(e) => {
              formState.region = e.target.value;
            }}
            placeholder="please select your zone"
          >
            <SelectOption value="shanghai">Zone one</SelectOption>
            <SelectOption value="beijing">Zone two</SelectOption>
          </Select>
        </FormItem> */}
              <FormItem label="时间">
                <DatePicker
                  value={formState.date1}
                  onChange={(date) => (formState.date1 = date)}
                  showTime
                  placeholder="点击选择"
                />
              </FormItem>
              <FormItem label="是否可用">
                <Switch
                  checked={formState.delivery}
                  onChange={(checked) => (formState.delivery = checked as boolean)}
                />
              </FormItem>
              <FormItem label="活动类型">
                <CheckboxGroup
                  value={formState.type}
                  onChange={(value) => (formState.type = value)}
                >
                  <Checkbox value="1" name="type">
                    Online
                  </Checkbox>
                  <Checkbox value="2" name="type">
                    Promotion
                  </Checkbox>
                  <Checkbox value="3" name="type">
                    Offline
                  </Checkbox>
                </CheckboxGroup>
              </FormItem>
              <FormItem label="Resources">
                <RadioGroup
                  value={formState.resource}
                  onChange={(e) => (formState.resource = e.target.value)}
                >
                  <Radio value="1">Sponsor</Radio>
                  <Radio value="2">Venue</Radio>
                </RadioGroup>
              </FormItem>
              <FormItem label="Activity form">
                <Input
                  value={formState.desc}
                  type="textarea"
                  onChange={(e) => (formState.desc = e.target.value)}
                />
              </FormItem>
              <FormItem wrapperCol={{ span: 14, offset: 4 }}>
                <Button type="primary" onClick={onSubmit}>
                  Create
                </Button>
                <Button style="margin-left: 10px;">Cancel</Button>
              </FormItem>
            </Form>
          </div>
        </FeCard>
      </div>
    );
  }
});

export default defineComponent({
  name: 'ViewForm',
  render() {
    return (
      <div class={`${fcp}-demo`}>
        <Header />
        <Body />
      </div>
    );
  }
});
