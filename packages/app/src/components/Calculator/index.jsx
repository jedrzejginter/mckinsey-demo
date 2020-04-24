import Button from "./Button";

export default function Calculator({
  display,
  error,
  onOperator,
  onDigit,
  onDot,
  onClear,
  onSubmit,
}) {
  return (
    <div css={{ width: "30rem" }} data-testid="Calculator">
      {error && (
        <p
          css={{ color: "red", fontSize: "1.6rem", padding: "1rem", margin: 0 }}
          data-testid="Calculator_ErrorDisplay"
        >
          {error}
        </p>
      )}
      <div
        css={{ border: "1px solid #000", fontSize: "3rem", padding: "2rem", overflow: "auto" }}
        data-testid="Calculator_ResultDisplay"
      >
        {display}
      </div>
      <div css={{ alignItems: "flex-start", display: "flex" }}>
        <div
          css={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-end", width: "18rem" }}
        >
          <Button data-testid="Calculator_1Btn" onClick={onDigit} onClickData={1}>
            1
          </Button>
          <Button data-testid="Calculator_2Btn" onClick={onDigit} onClickData={2}>
            2
          </Button>
          <Button data-testid="Calculator_3Btn" onClick={onDigit} onClickData={3}>
            3
          </Button>
          <Button data-testid="Calculator_4Btn" onClick={onDigit} onClickData={4}>
            4
          </Button>
          <Button data-testid="Calculator_5Btn" onClick={onDigit} onClickData={5}>
            5
          </Button>
          <Button data-testid="Calculator_6Btn" onClick={onDigit} onClickData={6}>
            6
          </Button>
          <Button data-testid="Calculator_7Btn" onClick={onDigit} onClickData={7}>
            7
          </Button>
          <Button data-testid="Calculator_8Btn" onClick={onDigit} onClickData={8}>
            8
          </Button>
          <Button data-testid="Calculator_9Btn" onClick={onDigit} onClickData={9}>
            9
          </Button>
          <Button data-testid="Calculator_0Btn" onClick={onDigit} onClickData={0}>
            0
          </Button>
          <Button data-testid="Calculator_DotBtn" onClick={onDot}>
            .
          </Button>
        </div>
        <div css={{ display: "flex", flexWrap: "wrap", width: "12rem" }}>
          <Button data-testid="Calculator_AddBtn" onClick={onOperator} onClickData="+">
            +
          </Button>
          <Button data-testid="Calculator_SubBtn" onClick={onOperator} onClickData="-">
            -
          </Button>
          <Button data-testid="Calculator_MultBtn" onClick={onOperator} onClickData="*">
            *
          </Button>
          <Button data-testid="Calculator_DivBtn" onClick={onOperator} onClickData="/">
            /
          </Button>
          <Button data-testid="Calculator_EqualBtn" onClick={onSubmit}>
            =
          </Button>
          <Button data-testid="Calculator_ResetBtn" onClick={onClear}>
            CE
          </Button>
        </div>
      </div>
    </div>
  );
}