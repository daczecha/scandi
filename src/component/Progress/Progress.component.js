import { PureComponent } from 'react';

import './Progress.style.scss';

class Progress extends PureComponent {
  constructor(props) {
    super(props);

    this.state;
  }

  renderProgress = () => {
    const { stepMap, checkoutStep } = this.props;

    let stepArray = [];

    for (let key in stepMap) {
      stepArray.push({
        name: key,
        title: stepMap[key].title.replace('step', ''),
      });
    }

    return stepArray.map((step, i) => {
      const stepNumber = i + 1;

      const currentStep = stepArray.find((step) => step.name === checkoutStep);

      const currentStepIndex = stepArray.indexOf(currentStep);

      return (
        <>
          <div block="Progress" elem="Line">
            {i <= currentStepIndex ? (
              <div block="Line" elem="Fill"></div>
            ) : null}
          </div>
          {stepNumber < stepArray.length ? (
            <div block="Progress" elem="Step">
              <div
                block="Step"
                elem="Cirlce"
                mods={{ isFilled: i <= currentStepIndex ? true : false }}
              >
                {i < currentStepIndex ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <span>{stepNumber}</span>
                )}
              </div>
              <p
                block="Step"
                elem="Title"
                mods={{ isFilled: i <= currentStepIndex ? true : false }}
              >
                {step.title}
              </p>
            </div>
          ) : null}
        </>
      );
    });
  };

  render() {
    return <div block="Progress">{this.renderProgress()}</div>;
  }
}

export default Progress;
