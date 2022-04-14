import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component.js';

import Progress from 'Component/Progress/Progress.component.js'

import ContentWrapper from 'Component/ContentWrapper';

import './Checkout.extension.style.scss'

export class Checkout extends SourceCheckout {
  render() {
    return (
        <main block="Checkout">
          <Progress 
            checkoutStep = { this.props.checkoutStep}
            stepMap = {this.stepMap}
          />
            <ContentWrapper
              wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
              label={ __('Checkout page') }
            >
                { this.renderSummary(true) }
                <div block="Checkout" elem="Step">
                    { this.renderTitle() }
                    { this.renderGuestForm() }
                    { this.renderStep() }
                    { this.renderLoader() }
                </div>
                <div>
                    { this.renderSummary() }
                    { this.renderPromo() }
                    { this.renderCoupon() }
                </div>
            </ContentWrapper>
        </main>
    );
  }
}
export default Checkout;
